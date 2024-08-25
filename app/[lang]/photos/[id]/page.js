import PhotoDetails from "@/app/components/PhotoDetails";
import React from "react";
import { getDictionary } from "../../dictionaries";

const PhotoDetailsPage = async ({ params: { id, lang } }) => {


  return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoDetailsPage;
