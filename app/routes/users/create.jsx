import { redirect } from '@remix-run/node';

export const action = async ({ request }) => {
  const form = await request.formDate()
  const name = form.get('name')
  const surname = form.get('surname')
  const email = form.get('email')
  const mobile = form.get('mobile')
  console.log(name);
}

export default function CreateUsers() {
  return (
    <form action="POST">
      <label htmlFor="name">Name</label><br />
      <input type="text" name="name" id="name" /><br />

      <label htmlFor="surname">surname</label><br />
      <input type="text" name="surname" id="surname" /><br />

      <label htmlFor="email">email</label><br />
      <input type="email" name="email" id="email" /><br />

      <label htmlFor="mobile">mobile</label><br />
      <input type="number" name="mobile" id="mobile" /><br />

      <button type="submit">Create</button>

    </form>
  );
}

