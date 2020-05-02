import { isNil } from "ramda";
import { logInfo, logError } from "./lib/utils/Logger";
import app from "./App";

const port = process.env.PORT || 3000;

app.listen(port, (err: Error) => {
  return isNil(err) ? logInfo(`Server: Listening on :${port}`) : logError(err);
});
