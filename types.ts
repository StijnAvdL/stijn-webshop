
import { Richtext } from "@storyblok/vue";

export interface StoryblokAccordion {
    content: Richtext,
    headline: String
}
  
export interface StoryblokFeature {
    name: String,
    image: {
        filename: string,
        alt: string
    }
}
  
export interface StoryblokGrid {
    columns: any,
}
 
export interface StoryblokTeaser {
    headline: string,
}