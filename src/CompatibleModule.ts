import { BlogIntroModule } from "./BlogIntroModule";
import { CallToActionModule } from "./CallToActionModule";
import { CompareModule } from "./CompareModule";
import { ContactModule } from "./ContactModule";
import { CookiesModule } from "./CookiesModule";
import { EmotionModule } from "./EmotionModule";
import { EventModule } from "./EventModule";
import { EventsListModule } from "./EventsListModule";
import { FactsModule } from "./FactsModule";
import { FaqModule } from "./FaqModule";
import { FooterModule } from "./FooterModule";
import { GalleryModule } from "./GalleryModule";
import { IndexModule } from "./IndexModule";
import { LocationModule } from "./LocationModule";
import { MenuModule } from "./MenuModule";
import { NavigationModule } from "./NavigationModule";
import { PartialModule } from "./PartialModule";
import { PictureAndTextModule } from "./PictureAndTextModule";
import { PicturegroupModule } from "./PicturegroupModule";
import { PictureModule } from "./PictureModule";
import { PlaceholderModule } from "./PlaeceholderModule";
import { PricesModule } from "./PricesModule";
import { QuellcodeModule } from "./QuellcodeModule";
import { QuoteModule } from "./QuoteModule";
import { ShoppingCartModule } from "./ShoppingCartModule";
import { StoryModule } from "./StoryModule";
import { TextModule } from "./TextModule";
import { TrainingModule } from "./TrainingMdule";
import { VideoModule } from "./VideoModule";

/**
 * Union type that combines all module interfaces for compatibility
 */
export type CompatibleModule = 
  | BlogIntroModule
  | CallToActionModule
  | CompareModule
  | ContactModule
  | CookiesModule
  | EmotionModule
  | EventModule
  | EventsListModule
  | FactsModule
  | FaqModule
  | FooterModule
  | GalleryModule
  | IndexModule
  | LocationModule
  | MenuModule
  | NavigationModule
  | PartialModule
  | PictureAndTextModule
  | PictureModule
  | PicturegroupModule
  | PlaceholderModule
  | PricesModule
  | QuellcodeModule
  | QuoteModule
  | ShoppingCartModule
  | StoryModule
  | TextModule
  | TrainingModule
  | VideoModule