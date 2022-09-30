let sugar: boolean = true

console.log(sugar);

type Madlad = {
    cool: boolean,
    heavy: boolean,
    name?: string,
    age?: number,
    badooby: string,
    [key:string] : any
}


let skandog: Madlad = {
    cool: true,
    heavy: true,
    name: "skandoggy dog",
    badooby: "Of course!"
}

console.log(skandog);

function kingMaker( madlad: Madlad) {
    return `${madlad.name} is an absolute king! Is he still a Badooby? ${madlad.badooby}`
}

console.log(kingMaker(skandog));