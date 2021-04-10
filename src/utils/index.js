export const mobileWidth = () => {
    console.log(window.innerWidth < 980)
    return window.innerWidth < 980
}

export const getAspectRatio = ({width, height}) => {
    return width / height
}