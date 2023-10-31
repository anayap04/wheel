import img from "../assets/img/logo_blc.png";
export const mapValues = data => {
  return data?.map(value => {
    return {
      text: value.text,
      id: value.image,
      image: img,
    }
  })
}
