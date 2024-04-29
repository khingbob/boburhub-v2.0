import { Brand } from "./Brand";
import { CustomPaper } from "./CustomPaper";

export default function Topbar() {
  return (
    <CustomPaper sx={{width: "100%"}}>
      <Brand variant = "h5"/>
    </CustomPaper>
  );
}
