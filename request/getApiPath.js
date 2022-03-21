import { config } from "common-utils";
let ctxPath = config.getContextPath();
export default function getApiPath() {
  const compentTeacherSelectApiUrl = ("/eduwebngv1" == ctxPath || "/eduwebngv1-ding" == ctxPath) ? '/qsxxwapdev' :
    "/qsxxwebngv0" == ctxPath ? '/qsxxwaptest' :
      ("/qsxxweb" == ctxPath || '/qsxxwebdingpage' == ctxPath) ? '' :
        ("/qsxxuser" == ctxPath || '/qsxxuserdingpage' == ctxPath) ? '' :
          ctxPath.indexOf("qs_") != -1 ? '/qsxxwapdev' :
            ctxPath;
  return compentTeacherSelectApiUrl
}
