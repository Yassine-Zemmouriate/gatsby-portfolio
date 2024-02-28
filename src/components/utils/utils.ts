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
    minSmall : `(min-width: ${sizes.small})`,
    maxSmall : `(max-width: ${sizes.small})`,
    minMobile : `(min-width: ${sizes.mobile})`,
    maxMobile : `(max-width: ${sizes.mobile})`,
    minSmallTablet : `(min-width: ${sizes.medium})`,
    maxSmallTablet : `(max-width: ${sizes.medium})`,
    minBigTablet : `(min-width: ${sizes.big})`,
    maxBigTablet : `(max-width: ${sizes.big})`,
    smalltablet : `(max-width: ${sizes.medium})`,
    bigtablet : `(min-width: ${sizes.medium}) and (max-width: ${sizes.big})`,
    monitor : `(min-width: ${sizes.big})`
}