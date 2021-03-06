import { getSession } from "next-auth/client";
import { dbConnect } from "../../../../lib/db";
import Card from "../../../../models/Card";

export default async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401);
    return res.end();
  }

  await dbConnect();
  switch (req.method) {
    case "POST":
      const { body } = req;

      if (body.name.trim() === "" || body.listId.trim() === "") {
        res.status(422);
        return res.end();
      }

      const card = await Card.create(body);
      res.json(card);
      break;
    default:
      res.status(405).send("Method not allowed");
      break;
  }
};
