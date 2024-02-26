export const convertPxtoRem = (px : number) => {
    return px / 16;
};

const sizes = {
    big : "1536px",
    medium : "960px",
    mobile : "704px",
    small : "540px"

}

export const device = {
    smalltablet : `(max-width: ${sizes.medium})`,
    bigtablet : `(min-width: ${sizes.medium}) and (max-width: ${sizes.big})`,
    monitor : `(min-width: ${sizes.big})`
}