export type HomeResult = {


    title: string;
    description: string;
    
    HeroImage:{
        url: string;
    }
    };

   export interface HomeInfo {
        title: string;
        description: string;
        HeroImage: {
          id: number;
          documentId: string;
          name: string;
          alternativeText: string | null;
          caption: string | null;
          width: number;
          height: number;
          formats: {
            large: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            small: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            medium: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
            thumbnail: {
              ext: string;
              url: string;
              hash: string;
              mime: string;
              name: string;
              path: string | null;
              size: number;
              width: number;
              height: number;
              sizeInBytes: number;
            };
          };
        };
      }