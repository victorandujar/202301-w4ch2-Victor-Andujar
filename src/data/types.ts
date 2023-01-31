export interface GiphStructure {
  data: [
    {
      title: string;
      images: {
        original: {
          url: string;
          width: string;
          height: string;
        };
      };
    }
  ];
}
