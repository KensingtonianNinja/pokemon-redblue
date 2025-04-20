namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 100; index++) {
        Character.sayText("" + (Math.round(Character.x / 16) - 1) + " " + (Math.round(Character.y / 16) - 1) + "    " + Math.round(Character.x / 16) + " " + Math.round(Character.y / 16) + "    " + walkcycle, 100, false)
        pause(50)
    }
})
let FlagGettingStarter = 0
let Rival: Sprite = null
let ProfOak: Sprite = null
let FlagWentIntoTallGrass = 0
let rivalname = ""
let name = ""
let location = 0
let walkcycle = 0
let Character: Sprite = null
let walkable = 1
game.setDialogCursor(assets.image`Next`)
game.setDialogTextColor(4)
Character = sprites.create(assets.image`PlayerFront1`, SpriteKind.Player)
let rotation = 0
walkcycle = 0
let walking = 0
tiles.setCurrentTilemap(tilemap`PlayerHouse`)
Character.setPosition(136, 146)
Character.setImage(assets.image`ProfOak`)
let PokeballLab1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
let PokeballLab2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
let PokeballLab3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.NPC)
forever(function () {
    pause(500)
    if (location == 0) {
        Character.setImage(assets.image`ProfOak`)
        game.showLongText("Hello there! Welcome to the world of POKÉMON!", DialogLayout.Bottom)
        game.showLongText("My name is OAK! People call me the POKÉMON PROF!", DialogLayout.Bottom)
        pause(200)
        Character.setImage(assets.image`VenusaurFront`)
        game.showLongText("This world is inhabited by creatures called POKÉMON!", DialogLayout.Bottom)
        game.showLongText("For some people, POKÉMON are pets. Others use them for fights.", DialogLayout.Bottom)
        game.showLongText("Myself...", DialogLayout.Bottom)
        game.showLongText("I study POKÉMON as a profession.", DialogLayout.Bottom)
        Character.setImage(assets.image`PlayerFull`)
        game.showLongText("First, what is your name?", DialogLayout.Bottom)
        name = game.askForString("What is your name?")
        game.showLongText("Right! So your name is " + name + "!", DialogLayout.Bottom)
        Character.setImage(assets.image`RIvalFull1`)
        game.showLongText("This is my grandson. He's been your rival since you were a baby.", DialogLayout.Bottom)
        game.showLongText("...Erm, what is his name again?", DialogLayout.Bottom)
        rivalname = game.askForString("What is your rival's name?")
        game.showLongText("That's right! I remember now! His name is " + rivalname + "!", DialogLayout.Bottom)
        Character.setImage(assets.image`PlayerFull`)
        game.showLongText("" + name + "!", DialogLayout.Bottom)
        game.showLongText("Your very own POKÉMON legend is about to unfold!", DialogLayout.Bottom)
        game.showLongText("A world of dreams and adventures with POKÉMON awaits! Let's go!", DialogLayout.Bottom)
        pause(500)
        Character.x += 16
        Character.y += 38
        Character.setImage(assets.image`PlayerFrontTransparent`)
        pause(500)
        Character.setImage(assets.image`empty`)
        pause(500)
        Character.setImage(assets.image`PlayerFrontTransparent`)
        pause(500)
        Character.setImage(assets.image`empty`)
        pause(500)
        Character.setImage(assets.image`PlayerFrontTransparent`)
        pause(500)
        Character.setImage(assets.image`PlayerFront1`)
        location = 1
    }
})
forever(function () {
    if (FlagWentIntoTallGrass == 0) {
        if (location == 2 && (Math.round(Character.x / 16) == 11 && Math.round(Character.y / 16) == 2)) {
            walkable = 0
            pause(500)
            Character.setPosition(168, 24)
            game.showLongText("OAK: Hey! Wait! Don't go out!", DialogLayout.Bottom)
            walkcycle = 1
            rotation = 1
            FlagWentIntoTallGrass = 1
            pause(1000)
            ProfOak = sprites.create(assets.image`OakBack1`, SpriteKind.NPC)
            game.showLongText("Oak: I fly now.", DialogLayout.Bottom)
            ProfOak.setPosition(136, 88)
            pause(1000)
            for (let index = 0; index < 16; index++) {
                pause(30)
                ProfOak.y += -1
            }
            for (let index = 0; index < 16; index++) {
                pause(30)
                ProfOak.x += 1
            }
            for (let index = 0; index < 16; index++) {
                pause(30)
                ProfOak.y += -1
            }
            for (let index = 0; index < 16; index++) {
                pause(30)
                ProfOak.x += 1
            }
            for (let index = 0; index < 16; index++) {
                pause(30)
                ProfOak.y += -1
            }
            game.showLongText("OAK: It's unsafe! Wild POKÉMON live in tall grass!", DialogLayout.Bottom)
            game.showLongText("You need your own POKÉMON for your protection. I know!", DialogLayout.Bottom)
            game.showLongText("Here, come with me!", DialogLayout.Bottom)
            game.showLongText("Oak: Now we teleport", DialogLayout.Bottom)
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 2; index++) {
                    Character.y += 5
                    ProfOak.y += 5
                    Character.y += 5
                    ProfOak.y += 5
                    Character.y += 5
                    ProfOak.y += 5
                    Character.y += 5
                    ProfOak.y += 5
                }
                walkcycle += 1
            }
            for (let index = 0; index < 1; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(500)
                    Character.x += -2
                    ProfOak.x += -2
                    pause(500)
                }
                walkcycle += 1
            }
            rotation = 4
            for (let index = 0; index < 1; index++) {
                for (let index = 0; index < 2; index++) {
                    pause(500)
                    Character.y += 2
                    ProfOak.y += 2
                    Character.y += 2
                    ProfOak.y += 2
                    Character.y += 2
                    ProfOak.y += 2
                    Character.y += 2
                    ProfOak.y += 2
                }
                walkcycle += 1
            }
            rotation = 1
            for (let index = 0; index < 4; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += 2
                    ProfOak.y += 2
                }
                walkcycle += 1
            }
            for (let index = 0; index < 1; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += 2
                    ProfOak.x += 2
                }
                walkcycle += 1
            }
            rotation = 2
            game.showLongText("Oak: Now we teleport", DialogLayout.Bottom)
            for (let index = 0; index < 2; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.x += 3
                    ProfOak.x += 4
                }
                walkcycle += 1
            }
            for (let index = 0; index < 1; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += -2
                    ProfOak.y += -2
                }
                walkcycle += 1
            }
            ProfOak.setImage(assets.image`empty`)
            rotation = 3
            walkcycle = 1
            pause(1000)
            location = 3
            Character.setPosition(88, 184)
            ProfOak.setPosition(88, 168)
            ProfOak.setImage(assets.image`OakFront1`)
            Rival = sprites.create(img`
                ......4444......
                .44444222244....
                .422222222224...
                ..422242242224..
                ..442422442224..
                .41444241144414.
                .41411111111414.
                .41111411411114.
                ..441141141144..
                ..444112211444..
                .41144444444114.
                .41141444414114.
                ..444114411444..
                ...4241111424...
                ...4222442224...
                ....444..444....
                ................
                ................
                ................
                ................
                `, SpriteKind.NPC)
            tiles.placeOnTile(Rival, tiles.getTileLocation(5, 4))
            pause(1000)
            for (let index = 0; index < 8; index++) {
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += -2
                    ProfOak.y += -2
                }
                walkcycle += 1
            }
            game.showLongText("" + rivalname + ": Gramps! I'm fed up with waiting!", DialogLayout.Bottom)
            pause(200)
            game.showLongText("OAK: " + rivalname + "? Let me think...", DialogLayout.Bottom)
            game.showLongText("Oh, that's right, I told you to come! Just wait!", DialogLayout.Bottom)
            tiles.setCurrentTilemap(tilemap`oakslabchoosing`)
            FlagGettingStarter = 1
            game.showLongText("Here, " + name + "!", DialogLayout.Bottom)
            game.showLongText("There are 3 POKÉMON here!", DialogLayout.Bottom)
            game.showLongText("Haha!", DialogLayout.Bottom)
            game.showLongText("They are inside the POKÉ BALLs.", DialogLayout.Bottom)
            game.showLongText("When I was young, I was a serious POKÉMON trainer!", DialogLayout.Bottom)
            game.showLongText("In my old age, I have only 3. but you can have one! Choose!", DialogLayout.Bottom)
            game.showLongText("" + rivalname + ": Hey! Gramps! What about me?", DialogLayout.Bottom)
            game.showLongText("OAK: Be patient! " + rivalname + ", you can have one too!", DialogLayout.Bottom)
            walkable = 1
        }
    }
})
forever(function () {
    if (walkcycle >= 5) {
        walkcycle = 1
    }
})
forever(function () {
    if (location == 1 || location == 2) {
        music.setVolume(100)
        music.stopAllSounds()
        music.play(music.createSong(assets.song`PalletTown`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (location == 0) {
        music.setVolume(100)
        music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
    }
})
forever(function () {
    if (location == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
        scene.setBackgroundColor(1)
    }
    if (location == 1) {
        tiles.setCurrentTilemap(tilemap`PlayerHouse`)
        scene.setBackgroundColor(4)
    }
    if (location == 2) {
        tiles.setCurrentTilemap(tilemap`PalletTown`)
        scene.setBackgroundColor(4)
    }
    if (location == 3) {
        if (FlagGettingStarter == 0) {
            tiles.setCurrentTilemap(tilemap`oakslab`)
            scene.setBackgroundColor(4)
        }
        if (FlagGettingStarter == 1) {
            tiles.setCurrentTilemap(tilemap`oakslabchoosing`)
            scene.setBackgroundColor(4)
        }
    }
})
forever(function () {
    pauseUntil(() => !(location == 0))
    Character.setPosition(136, 184)
    pauseUntil(() => location == 0)
})
forever(function () {
    if (!(location == 0)) {
        scene.cameraFollowSprite(Character)
    } else {
        scene.centerCameraAt(152, 184)
    }
})
forever(function () {
    if (walkable == 1) {
        if (!(location == 0)) {
            if (controller.up.isPressed()) {
                rotation = 3
                walkcycle += 1
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += -2
                }
            }
            if (controller.right.isPressed()) {
                rotation = 2
                walkcycle += 1
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.x += 2
                }
            }
            if (!(Math.round(Character.x / 8) == Character.x / 8)) {
                Character.x += -1
            }
            if (controller.left.isPressed()) {
                rotation = 4
                walkcycle += 1
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.x += -2
                }
                if (!(Math.round(Character.x / 8) == Character.x / 8)) {
                    Character.x += 1
                }
            }
            if (controller.down.isPressed()) {
                rotation = 1
                walkcycle += 1
                for (let index = 0; index < 8; index++) {
                    pause(30)
                    Character.y += 2
                }
            }
            if (location == 1 && (Math.round(Character.x / 16) == 13 && Math.round(Character.y / 16) == 7)) {
                pause(200)
                Character.x += 288
                rotation = 4
                pause(750)
            }
            if (location == 1 && (Math.round(Character.x / 16) == 32 && Math.round(Character.y / 16) == 7)) {
                pause(200)
                Character.x += -320
                rotation = 4
                pause(750)
            }
        }
        if (location == 1 && (Math.round(Character.x / 16) == 26 && Math.round(Character.y / 16) == 14)) {
            pause(200)
            walkcycle = 1
            location = 2
            Character.x += -320
            Character.y += -112
            music.setVolume(255)
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            rotation = 1
            pause(750)
        }
        if (location == 1 && (Math.round(Character.x / 16) == 27 && Math.round(Character.y / 16) == 14)) {
            pause(200)
            walkcycle = 1
            location = 2
            Character.x += -336
            Character.y += -112
            music.setVolume(255)
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            rotation = 1
            pause(750)
        }
        if (location == 2 && (Math.round(Character.x / 16) == 6 && Math.round(Character.y / 16) == 6)) {
            pause(100)
            walkcycle = 1
            location = 1
            Character.x += 336
            Character.y += 112
            music.setVolume(255)
            music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            rotation = 3
            pause(750)
        }
    }
})
forever(function () {
    if (!(location == 0)) {
        if (rotation == 1 && walkcycle == 1) {
            Character.setImage(assets.image`PlayerFront1`)
        }
        if (rotation == 1 && walkcycle == 2) {
            Character.setImage(assets.image`PlayerFront2`)
        }
        if (rotation == 1 && walkcycle == 3) {
            Character.setImage(assets.image`PlayerFront1`)
        }
        if (rotation == 1 && walkcycle == 4) {
            Character.setImage(assets.image`PlayerFront3`)
        }
        if (rotation == 2 && walkcycle == 1) {
            Character.setImage(assets.image`PlayerRight1`)
        }
        if (rotation == 2 && walkcycle == 2) {
            Character.setImage(assets.image`PlayerRight2`)
        }
        if (rotation == 2 && walkcycle == 3) {
            Character.setImage(assets.image`PlayerRight1`)
        }
        if (rotation == 2 && walkcycle == 4) {
            Character.setImage(assets.image`PlayerRight2`)
        }
        if (rotation == 3 && walkcycle == 1) {
            Character.setImage(assets.image`PlayerBack1`)
        }
        if (rotation == 3 && walkcycle == 2) {
            Character.setImage(assets.image`PlayerBack2`)
        }
        if (rotation == 3 && walkcycle == 3) {
            Character.setImage(assets.image`PlayerBack1`)
        }
        if (rotation == 3 && walkcycle == 4) {
            Character.setImage(assets.image`PlayerBack3`)
        }
        if (rotation == 4 && walkcycle == 1) {
            Character.setImage(assets.image`PlayerLeft1`)
        }
        if (rotation == 4 && walkcycle == 2) {
            Character.setImage(assets.image`PlayerLeft2`)
        }
        if (rotation == 4 && walkcycle == 3) {
            Character.setImage(assets.image`PlayerLeft1`)
        }
        if (rotation == 4 && walkcycle == 4) {
            Character.setImage(assets.image`PlayerLeft2`)
        }
        if (!(controller.up.isPressed()) && (!(controller.left.isPressed()) && (!(controller.right.isPressed()) && !(controller.down.isPressed()))) && walkable == 1) {
            walkcycle = 1
        }
    } else {
    	
    }
})
forever(function () {
    if (FlagGettingStarter == 1) {
        PokeballLab1.setImage(assets.image`PokeballLab`)
        PokeballLab1.setPosition(104, 52)
        PokeballLab2.setImage(assets.image`PokeballLab`)
        PokeballLab2.setPosition(120, 52)
        PokeballLab3.setImage(assets.image`PokeballLab`)
        PokeballLab3.setPosition(136, 52)
        if (controller.A.isPressed() && Character.tilemapLocation() == tiles.getTileLocation(6, 4)) {
            game.showLongText(game.ask("do you want bulbasaur"), DialogLayout.Bottom)
        }
    }
})
