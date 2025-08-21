type Watch = {
    id: number;
    image: string;
    type: string;
    title: string;
    description: string;
    price: string;
}

export const Watches : Watch[] = [
    {
        id:1,
        image: "../first_watch.webp",
        type: "New",
        title: "LONGINES SPIRIT ZULU TIME 1925",
        description: "Ø 39.00 mm - Automatic watch Stainless steel and 18 karat pink gold cap 200",
        price: "₹421,000.00",
    },
    {
        id:2,
        image: "../second_watch.avif",
        type: "New",
        title: "LONGINES SPIRIT ZULU TIME",
        description: "Ø 39.00 mm - Automatic watch Stainless steel and ceramic bezel",
        price: "₹32,000.00",
    },
    {
        id:3,
        image: "../third_watch.avif",
        type: "New",
        title: "LONGINES SPIRIT ZULU TIME ",
        description: "Ø 39.00 mm - Automatic watch Stainless steel and ceramic bezel",
        price: "₹32,000.00",
    },
]