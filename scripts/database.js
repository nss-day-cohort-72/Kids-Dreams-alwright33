const database = {
    celebrities: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        sport: "Hockey"
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        sport: "Basketball"
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        spōrt: "Golf"
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        sport: "Baseball"
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        sport: "Gymnastics"
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        sport: "Gymnastics"
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        sport: "Baseball"
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        sport: "Basketball"
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        sport: "Hockey"
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        sport: "Football"
    }],
    children: [{
        id: 1,
        name: "Christan Swindles",
        celebrityId: 6,
        wish: "throwing the opening pitch at a baseball game"
    }, {
        id: 2,
        name: "Findlay Dumini",
        celebrityId: 8,
        wish: "driving a race car"
    }, {
        id: 3,
        name: "Micheil Guerrazzi",
        celebrityId: 9,
        wish: "visiting the White House"
    }, {
        id: 4,
        name: "Karine McKennan",
        celebrityId: 6,
        wish: "driving a race car"
    }, {
        id: 5,
        name: "Cissy Weavers",
        celebrityId: 5,
        wish: "taking a trip to Disneyworld and spending the day with Mickey Mouse"
    }, {
        id: 6,
        name: "Bendick Standbrooke",
        celebrityId: 2,
        wish: "singing a song with Taylor Swift and pet her cats"
    }, {
        id: 7,
        name: "Ethyl Copnell",
        celebrityId: 10,
        wish: "dunking on LeBron James"
    }, {
        id: 8,
        name: "Elisha Betchley",
        celebrityId: 2,
        wissh: "riding in a helicopter"
    }, {
        id: 9,
        name: "Enrica Mathivon",
        celebrityId: 1,
        wish: "taking care of ponies on a farm and spending the whole night riding one"
    }, {
        id: 10,
        name: "Humfrid Madner",
        celebrityId: 4,
        wish: "putting out a fire as a fireman after riding on the truck with the siren on"
    }]
}

export const getChildren = () => {
    return database.children.map(children => ({...children}))
}

export const getCelebrities = () => {
    return database.celebrities.map(celebrity => ({...celebrity}))
}


