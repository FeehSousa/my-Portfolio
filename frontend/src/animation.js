export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildred: 0.25
        }
    },
    exit: {
        opocity: 0,
        transition: {
            duration: 0.5
        }
    }
}
export const titleAnimation ={
    hidden: {
        y: 200
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease:'easeOut'
        }
    }
}
export const fade = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            ease:'easeOut'
        }
    }
}
export const photoAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.5
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
            ease:'easeOut'
        }
    }
}
export const scollReveal = {
    hidden: {
        opacity: 0,
        scale: 1.2,
        transition: {
            duration: 0.5
        }
    },
    show: {
        opacity: 0.75,
        scale: 1,
        transition: {
            duration: 0.5
        }
    }
}