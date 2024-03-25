import { Outlet, Link, useLoaderData, Form } from "react-router-dom";
import { getContacts, createContact } from "../contacts";

export async function action() {
  const contact = await createContact();
  return { contact };
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();
  return (
    <>
      <div id="sidebar">
        <h1>Developed by Raza ullah Chitrali </h1>

        <div>
          <p className="text-5xl  text-blue-600 md:text-green-600">Raza.dev</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link to={"/"}>Dashboard</Link>
            </li>

            <li>
              <Link to={"/customer/create"}>Customer Create</Link>
            </li>
            <li>
              <Link to={"bank/create"}>Bank Create</Link>
            </li>
            <li>
              <Link to={"admission/create"}>Admission</Link>
            </li>
            <li>
              <Link to={"office/create"}>Office Files</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
