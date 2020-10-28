enum Membership {
    Simple, Standard, Premium
}

const memberShip = Membership.Standard
const memberShipReverse = Membership[2]

console.log(memberShip); // 1
console.log(memberShipReverse); // "Premium"

enum SocialMedia {
    vk = "VK",
    fb = "Facebook",
    instagram = "Instagram"
}

const social = SocialMedia.instagram // "Instagram"