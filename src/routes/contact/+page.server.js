import { MailService } from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';
import { redirect, fail } from '@sveltejs/kit';

// export function load({ cookies }) {
// 	if (cookies.get('allowed')) {
// 		throw redirect(307, '/welcome');
// 	}
// }

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

        // for spam protection
        if(data.get('honey') !== '') {
            return fail(403, {incorrect: true})
        }

        const sgMail = new MailService();
        sgMail.setApiKey(SENDGRID_API_KEY)
        const msg = {
          to: 'ryuj0415@gmail.com', // Change to your recipient
          from: 'ryuj0415@gmail.com', // Change to your verified sender
          subject: 'Asayake Taiko Performance Request',
          text: 'Asayake Taiko Performance Request',
          html: `Sent from Asayake Contact Page. <br /><br /> <b>Name</b>: ${data.get('name')} <br /> <b>Phone (optional)</b>: ${data.get('phone')} <br /> <b>Email</b>: ${data.get('email')} <br /> <b>Organization/Event</b>: ${data.get('organization')} <br /> <b>Date</b>: ${data.get('date')} <br /> <b>Time</b>: ${data.get('time')} <br /><br /> <b>Detail</b>: <pre>${data.get('detail')}</pre>`,
        }
        sgMail
          .send(msg)
          .then(() => {
            console.log('Email sent')
            throw redirect(303, '/contact')
          })
          .catch((error) => {
            return fail(403, {incorrect: true})
          })
	}
};
