const getCSS = ( variavel ) => {
     const bodyStyles = getComputedStyle ( documen.body )
     return bodyStyles.getPropertyValue(variavel)
}

const tickconfig = {
    family: getCSS ('--font'),
    size:16,
    color: getCSS('--primary color')
}

export{getCSS,tickconfig }