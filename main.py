walking = 0
mySprite = sprites.create(assets.image("""
    PlayerFront1
"""), SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    PlayerBedroom
"""))
mySprite.set_position(136, 184)

def on_forever():
    tiles.set_wall_at(tiles.get_tile_location(5, 6), True)
    tiles.set_wall_at(tiles.get_tile_location(6, 6), True)
forever(on_forever)

def on_forever2():
    pass
forever(on_forever2)

def on_forever3():
    scene.camera_follow_sprite(mySprite)
forever(on_forever3)

def on_forever4():
    if controller.up.is_pressed():
        for index in range(8):
            mySprite.set_image(assets.image("""
                PlayerBack1
            """))
            pause(30)
            mySprite.y += -2
    if controller.right.is_pressed():
        for index2 in range(8):
            mySprite.set_image(assets.image("""
                PlayerRight1
            """))
            pause(30)
            mySprite.x += 2
    if controller.left.is_pressed():
        for index3 in range(8):
            mySprite.set_image(assets.image("""
                PlayerLeft1
            """))
            pause(30)
            mySprite.x += -2
    if controller.down.is_pressed():
        for index4 in range(8):
            mySprite.set_image(assets.image("""
                PlayerFront1
            """))
            pause(30)
            mySprite.y += 2
forever(on_forever4)
