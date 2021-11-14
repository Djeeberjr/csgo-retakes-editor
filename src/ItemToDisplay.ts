import Item from "./types/Item"
import Side from "./types/Side"

/**
 * Translates an Item to a displayable string
 * @param item what item
 * @param side CT or T
 */
 function ItemToDisplay(item:Item, side: Side ):string {
    switch (item) {
        case Item.DEFAULT_PISTOL:
            return side === Side.CT ? "USP-S / P2000":"Glock-18"
        case Item.DUAL_BERETTAS:
            return "Dual Berettas"
        case Item.P250:
            return "P250"
        case Item.TEC_9_FIVE_SEVEN:
            return side === Side.CT ? "Five-Seven / CZ75-Auto":"Tec-9 / CZ75-Auto"
        case Item.DESERT_EAGLE:
            return "Desert Eagle / R8 Revolver"
        case Item.NOVA:
            return "Nova"
        case Item.XM1014:
            return "XM1014"
        case Item.MAG_7:
            return side === Side.CT ? "MAG-7":"Sawed-Off"
        case Item.M249:
            return "M249"
        case Item.NEGEV:
            return "Negev"
        case Item.MAC_10_MP9:
            return side === Side.CT ? "MP9":"MAC-10"
        case Item.MP7:
            return "MP7 / MP5-SD"
        case Item.UMP_45:
            return "UMP-45"
        case Item.P90:
            return "P90"
        case Item.PP_BIZON:
            return "PP-Bizon"
        case Item.FAMAS_GALIL:
            return side === Side.CT ? "FAMAS":"Galil AR"
        case Item.AK_47_M4:
            return side === Side.CT ? "M4A4 / M4A1-S":"AK-47"
        case Item.SSG_08:
            return "SSG 08"
        case Item.SG_554_AUG:
            return side === Side.CT ? "AUG":"SG 553"
        case Item.AWP:
            return "AWP"
        case Item.G3_SCAR:
            return side === Side.CT ? "SCAR-20":"G3SG1"
        case Item.MOLOTOV:
            return side === Side.CT ? "Incendiary Grenade":"Molotov"
        case Item.DECOY:
            return "Decoy"
        case Item.FLASHBANG:
            return "Flashbang"
        case Item.HE:
            return "HE Grenade"
        case Item.SMOKE:
            return "Smoke"
        default:
            throw new Error("Item not translatable")
    }
}

export default ItemToDisplay
