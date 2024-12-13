const PHYSICAL_ITEM_TYPES = new Set([
    "armor",
    "backpack",
    "book",
    "consumable",
    "equipment",
    "treasure",
    "weapon",
] as const);

const BULK_VALUES = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "L",
] as const;

const PRECIOUS_MATERIAL_TYPES = new Set([
    "abysium",
    "adamantine",
    "cold-iron",
    "darkwood",
    "djezet",
    "dragonhide",
    "grisantian-pelt",
    "inubrix",
    "keep-stone",
    "mithral",
    "noqual",
    "orichalcum",
    "peachwood",
    "siccatite",
    "silver",
    "sisterstone",
    "sisterstone-dusk",
    "sisterstone-scarlet",
    "sovereign-steel",
    "warpglass",
] as const);

const PRECIOUS_MATERIAL_GRADES = new Set(["low", "standard", "high"] as const);

const DENOMINATIONS = ["pp", "gp", "sp", "cp"] as const;

export { BULK_VALUES, DENOMINATIONS, PHYSICAL_ITEM_TYPES, PRECIOUS_MATERIAL_GRADES, PRECIOUS_MATERIAL_TYPES };