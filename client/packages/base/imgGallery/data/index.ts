import axios from "axios";

const api_images =
  "https://jtxm3bst4j.execute-api.eu-north-1.amazonaws.com/images";

export function getImages(year: string): Promise<string[] | string> {
  const new_api_images = `${api_images}?year=${year}`;
  return axios
    .get(new_api_images, {
      headers: {
        "Content-Type": "application/xml",
      },
    })
    .then((response) => response.data);
}
