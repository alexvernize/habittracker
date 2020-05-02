import app from "./App";
import { isNil } from "ramda";

const port = process.env.PORT || 3000;

app.listen(port, (err: Error) => {
  return isNil(err)
    ? console.log(`Server: Listening on :${port}`)
    : console.error(err);
});
