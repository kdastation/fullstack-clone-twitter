import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ISideBarMenuItem {
  IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path: string;
  name: string;
}
