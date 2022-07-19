import { redirect } from '@remix-run/node';

export const action = async ({ request }) => {
  const form = await request.formDate()
  const street = form.get('street')
  const city = form.get('city')
  const state = form.get('state')
  const postalCode = form.get('postalCode')
}

export default function createAddress() {
  return (
    <>
      <form action="POST">
        <label htmlFor="street">street</label><br />
        <input type="text" name="street" id="street" /><br />

        <label htmlFor="city">city</label><br />
        <input type="text" name="city" id="city" /><br />

        <label htmlFor="state">state</label><br />
        <input type="text" name="state" id="state" /><br />

        <label htmlFor="postalCode">postal Code</label><br />
        <input type="text" name="postalCode" id="postalCode" /><br />

        <label htmlFor="country">country</label><br />
        <input type="text" name="country" id="country" /><br />

        <label htmlFor="phone">phone</label><br />
        <input type="text" name="phone" id="phone" /><br />

        <button type="submit">Create</button>

      </form>
    </>
  )
}
