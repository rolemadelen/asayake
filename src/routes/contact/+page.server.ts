import sendgrid from "@sendgrid/mail";
import { fail } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    // for spam protection
    if (data.get("honey") !== "") {
      return fail(403, { incorrect: true });
    }

    const key = process.env.SENDGRID_API_KEY as string;
    sendgrid.setApiKey(key);

    const msg = {
      to: "ryuj0415@gmail.com", // Change to your recipient
      from: "ryuj0415@gmail.com", // Change to your verified sender
      subject: `${data.get(
        "organization",
      )} - Asayake Taiko Performance Request`,
      text: "Asayake Taiko Performance Request",
      html: `Sent from Asayake Contact Page. <br /><br /> <b>Name</b>: ${data.get(
        "name",
      )} <br /> <b>Phone (optional)</b>: ${data.get(
        "phone",
      )} <br /> <b>Email</b>: ${data.get(
        "email",
      )} <br /> <b>Organization/Event</b>: ${data.get(
        "organization",
      )} <br /> <b>Date</b>: ${data.get("date")} <br /> <b>Time</b>: ${data.get(
        "time",
      )} <br /><br /> <b>Detail</b>: <pre>${data.get("detail")}</pre>`,
    };

    try {
      await sendgrid.send(msg);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false };
    }
  },
};
