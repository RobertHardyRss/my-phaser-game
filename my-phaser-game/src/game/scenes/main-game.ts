import { Scene } from "phaser";

export class MainGame extends Scene {
	player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
	platforms: any;

	constructor() {
		super("MainGame");

		console.log("MainGame constuctor");
	}

	// provided by phaser, preloads assets like images
	preload() {
		this.load.image("sky", "assets/sky.png");
		this.load.image("ground", "assets/platform.png");
		this.load.image("star", "assets/star.png");
		this.load.spritesheet("dude", "assets/dude.png", {
			frameWidth: 32,
			frameHeight: 48,
		});
	}

	create() {
		this.add.image(400, 300, "sky");

		this.platforms = this.physics.add.staticGroup();
		this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

		this.player = this.physics.add.sprite(400, 400, "dude");
	}

	update(time: number, delta: number): void {
		console.log("from update");
	}
}
