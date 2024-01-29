import { ObjectId } from "mongodb";
import {Content} from "./Content";
import { MediaInfo } from "./MediaInfo";
import { MediaViewInfo } from "./MediaViewInfo";
import { VersionInfo } from "./VersionInfo";

export interface Media {

  company?: string;
  project?: string;

  /** files can be uploaded from a admin company for a partner  */
  fromCompany?: string;
  fromProject?: string;

  filename?: string;
  id?: string;
  type?: string;
  size?: number;
  tags?: string[];
  image?: boolean;
  video?: boolean;
  folder?: boolean;
  mimetype?: string;

  info?: MediaInfo;
  view?: MediaViewInfo;
  download?: string;
  basePath?: string;

  baseContent?: {
    id: ObjectId,
    version: number
    content?: Content
  }

  versions?: VersionInfo[];

  app?: string;
  appId?: string;

}