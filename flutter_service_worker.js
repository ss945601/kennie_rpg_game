'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bfe82f8d143df778676dae0f15da960b",
"version.json": "def9613e6c3479506be920e0cde47849",
"index.html": "70521143317f7c5817c7a4ef5aaad674",
"/": "70521143317f7c5817c7a4ef5aaad674",
"main.dart.js": "384c9c7cbc47feb5f0a320ce19175cf3",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "eaa5f9f775076a2ef845c03e98f64186",
"assets/AssetManifest.json": "c84febad2ad9bc9f120378c7bf8318c4",
"assets/NOTICES": "e7e3f27b24c87a8351a8e133ad12c557",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "f16ed424bff8cc4e9c4858059b223a71",
"assets/packages/nes_ui/assets/checkered_pattern.png": "7f3e9d7ae73d37c7329ee95d1d54f531",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e5637f85e39a5653479e6182ec617c6d",
"assets/fonts/MaterialIcons-Regular.otf": "ad630f905f86008f9db68f880367f4e5",
"assets/assets/images/bullet.png": "f35b61944969e005d6077b91e2020b9e",
"assets/assets/images/tiled/punnyworld/simple_map.tmj": "559ac0265109b4370afed463367b3724",
"assets/assets/images/tiled/punnyworld/embeded.tmj": "0110d0b84f9268d1adeaa708428d5543",
"assets/assets/images/tiled/punnyworld/compressed.tmj": "c049c1d43229a5d9b32da5072df9a1b7",
"assets/assets/images/tiled/punnyworld/village_map.tmj": "189aef9708c50eddac1626c0c1bb4b23",
"assets/assets/images/tiled/punnyworld/pathfinding_map.tmj": "688834e31fbf1c79180b1cb1fe9153e1",
"assets/assets/images/tiled/punnyworld/punyworld_tileset.png": "86f25e027c2712c30d0f6a3049a29564",
"assets/assets/images/tiled/punnyworld/punyworld_tileset.tsj": "fdaa220b2fba0392d3c8db67fe95a521",
"assets/assets/images/joystick_attack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/soldier.png": "ce7013efe144160b1210e355a926aaf6",
"assets/assets/images/orc.png": "cdcfcf2e7470c748b506e7fd852601d1",
"assets/assets/images/kennie.png": "9220b9c57762216d0db46118e4066c04",
"assets/assets/images/orc2.png": "93259e831c1b46afd56e17fa36027342",
"assets/assets/images/menu_bg.jpg": "ba5e454ac9b83a823ffeb8fa52208196",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/multi_scenario/tile/map_biome2.json": "066d0746c7c50cc811f410efe41ca082",
"assets/assets/images/multi_scenario/tile/biome1_tileset.json": "c54408559f6061f3b190564b80e0acbe",
"assets/assets/images/multi_scenario/tile/biome2_tileset.json": "a9d814a5e4f7acfd8e0f4dcf396c4007",
"assets/assets/images/multi_scenario/tile/biome2.png": "491e506fbfa06177ad91771b74f86d01",
"assets/assets/images/multi_scenario/tile/biome1.png": "ec2cc3e413fecc22cedad090324fb1b9",
"assets/assets/images/multi_scenario/tile/map_biome1.json": "74e89503c7b546067ba3622e14c35783",
"assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/enemy/attack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/robot.png": "b696d8a120962de4bde2ff8b7319786c",
"assets/assets/images/zombie.png": "41ebd5de73051a779ea2aa8be90b95af",
"assets/assets/images/human.png": "7e5d257d818a12a74dab746c59498440",
"assets/assets/images/joystick_attack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"assets/assets/images/items/potion_life.png": "825b71a3532854e849d512683dba06b0",
"assets/assets/images/items/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"assets/assets/images/items/sign.png": "446cec42d9ad3e0734320d2d5b414385",
"assets/assets/images/items/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/items/spikes.png": "8ee92dd121da5fc50964a6a68e3e262c",
"assets/assets/images/items/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/items/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"assets/assets/images/items/column.png": "2ccdc666f36fef12bb99345d4c6c9d66",
"assets/assets/images/items/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"assets/assets/images/items/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"assets/assets/images/items/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"assets/assets/images/items/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"assets/assets/images/smoke_explosion.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/characters/Boss/Boss%252001.png": "7385f99b27483dec4f42925bf7203ea6",
"assets/assets/images/characters/Enemy/Enemy%252002-1.png": "59bdeb75ce2a8d9ebe87b075a23b68bb",
"assets/assets/images/characters/Enemy/Enemy%252004-1.png": "521376d0d8acb08493c05713c839a899",
"assets/assets/images/characters/Enemy/Enemy%252006-1.png": "78451ad9e4e8b6aef8c8c54ba92bfd84",
"assets/assets/images/characters/Enemy/Enemy%252017-8.png": "65877ad14787967355655facb7fcf622",
"assets/assets/images/characters/Enemy/Enemy%252001-1.png": "1a4d175398e903274332bc2581d29c9e",
"assets/assets/images/characters/Enemy/Enemy%252003-1.png": "8616762f8e28a56bf9a90d727b433736",
"assets/assets/images/characters/Enemy/Enemy%252007-1.png": "40fd25358ec5dd5969b1125531f170d0",
"assets/assets/images/characters/Enemy/Enemy%252016-8.png": "7c6e70ed69efa814e7245c07a47c750d",
"assets/assets/images/characters/Enemy/Enemy%252005-1.png": "865b8bb5eea98faba599dac7ea4ec108",
"assets/assets/images/characters/Enemy/Enemy%252009-1.png": "bed9bcb7073b04e1850274f36e896062",
"assets/assets/images/characters/Enemy/Enemy%252016-6.png": "c489fc07453ff2fa5ca14146a384fe34",
"assets/assets/images/characters/Enemy/Enemy%252010-1.png": "c3e77333d0c61c10af91fb449033b5e6",
"assets/assets/images/characters/Enemy/Enemy%252016-7.png": "3212f3f1da5e10895feb073a16d151de",
"assets/assets/images/characters/Enemy/Enemy%252016-5.png": "14a7d130c2713f7b2c55a84ac1c85a31",
"assets/assets/images/characters/Enemy/Enemy%252012-1.png": "c6a7c0df51fa181b40382370db9abbeb",
"assets/assets/images/characters/Enemy/Enemy%252016-4.png": "9c43f3c561d60e5753676cfd9b8167b3",
"assets/assets/images/characters/Enemy/Enemy%252016-1.png": "639679b8b2c0c30c489d995a0269d494",
"assets/assets/images/characters/Enemy/Enemy%252014-1.png": "84201a144e81564a8585457a4ec9e77f",
"assets/assets/images/characters/Enemy/Enemy%252016-3.png": "837f976fef8be9b45c3e91f341408169",
"assets/assets/images/characters/Enemy/Enemy%252016-2.png": "f3f74a55de9406c1a6227de4b22fc3f5",
"assets/assets/images/characters/Enemy/Enemy%252013-1.png": "dfb46f860d0b0754ad4df38636e70f78",
"assets/assets/images/characters/Enemy/Enemy%252017-5.png": "a2aa8c1db9e59678a1723ef20c05fb53",
"assets/assets/images/characters/Enemy/Enemy%252015-6.png": "5693a1dad1c0720d0533014544c88f9b",
"assets/assets/images/characters/Enemy/Enemy%252017-4.png": "0138235e24800c2176dab3a7849b2ddd",
"assets/assets/images/characters/Enemy/Enemy%252018.png": "3a48340312643a68a73daa382af0f3c8",
"assets/assets/images/characters/Enemy/Enemy%252017-6.png": "fc7a0c2d08bea60ef5ed1d9f0100b8ee",
"assets/assets/images/characters/Enemy/Enemy%252015-4.png": "519c74e6342a0f041dbd7a92305aa784",
"assets/assets/images/characters/Enemy/Enemy%252008-1.png": "3513289200b9ebe19aa8dcdc3231e0e4",
"assets/assets/images/characters/Enemy/Enemy%252015-5.png": "dc2463a617264169a5c5cbb8e200a132",
"assets/assets/images/characters/Enemy/Enemy%252017-7.png": "8faea10f0c80d15cd5c986fa9f7e4174",
"assets/assets/images/characters/Enemy/Enemy%252011-1.png": "2bee670e6c3fdf2ce574fdb8138ac2d7",
"assets/assets/images/characters/Enemy/Enemy%252019.png": "aff887586af6aa9e994375738cf0d86e",
"assets/assets/images/characters/Enemy/Enemy%252021.png": "b5549a1b32b5850f3a2123dd49e36ac5",
"assets/assets/images/characters/Enemy/Enemy%252017-3.png": "a9da64bd5137d7c3f4dec7398b267186",
"assets/assets/images/characters/Enemy/Enemy%252015-1.png": "a7d0083b74744eb61c4c872f1e378506",
"assets/assets/images/characters/Enemy/Enemy%252017-2.png": "dcfe00f64f3ece2a47d3fbab507d420c",
"assets/assets/images/characters/Enemy/Enemy%252020.png": "4b2f1417a82dfb414629f6ffde4ad48a",
"assets/assets/images/characters/Enemy/Enemy%252022.png": "3dae225fa2b6d150c325f7d28c1c5a9a",
"assets/assets/images/characters/Enemy/Enemy%252015-2.png": "933cc376a63ec8c503de7b19beff230b",
"assets/assets/images/characters/Enemy/Enemy%252015-3.png": "ecfb517da3660a3b2fa17ef69cbc1e49",
"assets/assets/images/characters/Enemy/Enemy%252017-1.png": "f309c21b7f2c70b202b531f61e9635a6",
"assets/assets/images/characters/Male/Male%252002-4.png": "04a167b2276b5d29f8d4aefc5ca57071",
"assets/assets/images/characters/Male/Male%252004-2.png": "f703279da367333672dbe4cddd3b0bab",
"assets/assets/images/characters/Male/Male%252006-1.png": "579a42253be86e95eeca4c4630d70f21",
"assets/assets/images/characters/Male/Male%252004-3.png": "cd6b58da88c0126beb0f587362c7f8f5",
"assets/assets/images/characters/Male/Male%252004-1.png": "0bb922e77dd2fb8bd4c1969b10cab7c3",
"assets/assets/images/characters/Male/Male%252006-3.png": "d0d10c41ad70d1ae2e4cba0871d78a7b",
"assets/assets/images/characters/Male/Male%252006-2.png": "d9771867a1c31c09c6febab4e112b2f3",
"assets/assets/images/characters/Male/Male%252002-2.png": "e03f644154483d3de763f3d65695a724",
"assets/assets/images/characters/Male/Male%252004-4.png": "7188c9a6642345c631e07ad2a7dc1075",
"assets/assets/images/characters/Male/Male%252002-3.png": "c0cdd74e8cff6634b48951d51c916768",
"assets/assets/images/characters/Male/Male%252002-1.png": "a56d8425b84c178dcf0e200cec77e62b",
"assets/assets/images/characters/Male/Male%252006-4.png": "d8cb2db977c447ac33ac212d5cbe0d1e",
"assets/assets/images/characters/Male/Male%252007-3.png": "fb28211fe95e7ff1c90aef6949fe9d04",
"assets/assets/images/characters/Male/Male%252005-1.png": "e2abec1133ddfcb63c4ca3117ab82cd4",
"assets/assets/images/characters/Male/Male%252001-4.png": "6e19042396d23bdf6981f796ecae4776",
"assets/assets/images/characters/Male/Male%252007-2.png": "8fc6cdc39f86a3022e28c44352f53e9d",
"assets/assets/images/characters/Male/Male%252005-2.png": "3f5770d79b017953c35e13bb94774d52",
"assets/assets/images/characters/Male/Male%252003-4.png": "c1cd28a71904242687506e591c9c5a4d",
"assets/assets/images/characters/Male/Male%252005-3.png": "9d83ce29973c8416515843496f0e2a74",
"assets/assets/images/characters/Male/Male%252007-1.png": "41f34ae577e99f96975e49ad7132f546",
"assets/assets/images/characters/Male/Male%252003-1.png": "5015abcb2b143b2b46f9e4d69d593dbf",
"assets/assets/images/characters/Male/Male%252001-3.png": "369269db4d29555de2e96e21ea429b70",
"assets/assets/images/characters/Male/Male%252001-2.png": "bf99ffb45d9b8834892b21485c0bb275",
"assets/assets/images/characters/Male/Male%252007-4.png": "1eb55bc4248e087d5c92f5501f5c1818",
"assets/assets/images/characters/Male/Male%252018-1.png": "1cee2541d9b3b1a2106c759390b31e7a",
"assets/assets/images/characters/Male/Male%252005-4.png": "faedfc4fcdbd5d75cd5435618c8b51a8",
"assets/assets/images/characters/Male/Male%252003-2.png": "dc29459301fab2a83083c327603c8708",
"assets/assets/images/characters/Male/Male%252001-1.png": "ebbb4aa049182afb3551cd62f8344a71",
"assets/assets/images/characters/Male/Male%252003-3.png": "e912682aa955523d2386a5b97a936ce0",
"assets/assets/images/characters/Male/Male%252016-2.png": "37e09705ca4c9646c7cc3d6043175bc3",
"assets/assets/images/characters/Male/Male%252010-4.png": "3feaa69d637d4b4aedca0dff79b5a5bb",
"assets/assets/images/characters/Male/Male%252016-3.png": "f64bd8c6b1a1133abadeb7a840c6962f",
"assets/assets/images/characters/Male/Male%252014-1.png": "ea33b02ec7086aec9eee475a24640453",
"assets/assets/images/characters/Male/Male%252009-4.png": "b5324a26e8921d54e66be33b83aa354a",
"assets/assets/images/characters/Male/Male%252014-3.png": "1623b16904a6dc54978ab6cd10b7081d",
"assets/assets/images/characters/Male/Male%252016-1.png": "ce201749195f6d69147af7255318ae20",
"assets/assets/images/characters/Male/Male%252012-4.png": "8e2eb5f001a48451415a065a303f5908",
"assets/assets/images/characters/Male/Male%252014-2.png": "faefeafe4402ef1966ba2a409755cbac",
"assets/assets/images/characters/Male/Male%252009-3.png": "923389c25574597525e34fe489d6e33e",
"assets/assets/images/characters/Male/Male%252016-4.png": "d5e913251ed553ed3490d40fd157d8b2",
"assets/assets/images/characters/Male/Male%252010-2.png": "ccdcc7f87a4d518cc16c23a217bb6392",
"assets/assets/images/characters/Male/Male%252012-1.png": "6ec16b3c609b20f02d6b75e2afde4478",
"assets/assets/images/characters/Male/Male%252010-3.png": "ddd768b17c82f2d3c4e80ae374567b20",
"assets/assets/images/characters/Male/Male%252009-2.png": "d741a157f7ce18cfc4184c313c907f56",
"assets/assets/images/characters/Male/Male%252010-1.png": "18b27faa29e8c35180cdb23cf0966d58",
"assets/assets/images/characters/Male/Male%252012-3.png": "894f444d81114d3d5c64bd14f5a84b2a",
"assets/assets/images/characters/Male/Male%252012-2.png": "c666f2b66af3bdf7d5b7a3d7f52f2add",
"assets/assets/images/characters/Male/Male%252014-4.png": "b806618ff250b3c2fe16746047d040ec",
"assets/assets/images/characters/Male/Male%252009-1.png": "912e9ee7f91116de3d79360ca2748100",
"assets/assets/images/characters/Male/Male%252017-1.png": "28b059ae558a815b023bb46ee0681998",
"assets/assets/images/characters/Male/Male%252015-3.png": "3401f1d102e7510d5cf4d51a57173b6c",
"assets/assets/images/characters/Male/Male%252015-2.png": "3d4b618b9e845ef07cc877842c89c2e7",
"assets/assets/images/characters/Male/Male%252013-4.png": "32630dc0906ce4417d4cba8701ec4f73",
"assets/assets/images/characters/Male/Male%252011-4.png": "56eba7b6ac5d0355f894671c0292554c",
"assets/assets/images/characters/Male/Male%252017-2.png": "4bbddc6fe80eafc787c74bb25978bebc",
"assets/assets/images/characters/Male/Male%252015-1.png": "0d43f1f03c8c78b6f407c1e9181f4aab",
"assets/assets/images/characters/Male/Male%252008-4.png": "acc7aad008f7510ac3c03ffd8f5b939c",
"assets/assets/images/characters/Male/Male%252017-3.png": "fc5ed0dfc28e6bf75be229aaded70e8b",
"assets/assets/images/characters/Male/Male%252013-3.png": "8ce6a53845b18bbe4908da8970bc1c17",
"assets/assets/images/characters/Male/Male%252011-1.png": "a6c95d9583f468735dced00310789464",
"assets/assets/images/characters/Male/Male%252015-4.png": "ab50fcfacf688a08744c1b4d7d060b59",
"assets/assets/images/characters/Male/Male%252008-1.png": "508fb22621173e1d265bb023dc188213",
"assets/assets/images/characters/Male/Male%252013-2.png": "a5c1aef8693d50171d2be0887590b89d",
"assets/assets/images/characters/Male/Male%252011-2.png": "ff8e4e0219744e786213084907346819",
"assets/assets/images/characters/Male/Male%252017-4.png": "8870d94b752e6c96017aea37d25f6da4",
"assets/assets/images/characters/Male/Male%252008-3.png": "abde9768c26f382c434aa85a01b9edb5",
"assets/assets/images/characters/Male/Male%252008-2.png": "3cee6610c564935058a85b43ddf06171",
"assets/assets/images/characters/Male/Male%252011-3.png": "28691a69281dae4a09e113944c3774bb",
"assets/assets/images/characters/Male/Male%252013-1.png": "3eaf3f2eaf5e269ad4e9c80a6d4dc656",
"assets/assets/images/characters/Female/Female%252002-4.png": "b7aae20160cb97bf3710dcce95bee52a",
"assets/assets/images/characters/Female/Female%252004-2.png": "dc6485a91d7574da9f6f0774e598b082",
"assets/assets/images/characters/Female/Female%252022-1.png": "3833c2e8544e1a51ae66d025b8ec4be7",
"assets/assets/images/characters/Female/Female%252020-3.png": "77372453c66ddf89070afd41e530afb3",
"assets/assets/images/characters/Female/Female%252020-2.png": "488c0150ef95b1a184e39bb62c7b74b2",
"assets/assets/images/characters/Female/Female%252006-1.png": "552adf13ef55f7fe5a671896dc0c8476",
"assets/assets/images/characters/Female/Female%252004-3.png": "1f232211a9f21785fa0a29a5c2054e0b",
"assets/assets/images/characters/Female/Female%252019-4.png": "286dfa28181f7c2383263a2ef5e6e62d",
"assets/assets/images/characters/Female/Female%252022-2.png": "cb33440c389a7aa4a905bbfaaf234fe8",
"assets/assets/images/characters/Female/Female%252004-1.png": "708829ca0f92134ac446bf40974ba066",
"assets/assets/images/characters/Female/Female%252006-3.png": "244393a1042e92c514bf378c5cef5f74",
"assets/assets/images/characters/Female/Female%252006-2.png": "1a9b7a6e24e28f15b63b91bc9f1da7a0",
"assets/assets/images/characters/Female/Female%252020-1.png": "0a2202f09472c6e2fbb631c68870cb2c",
"assets/assets/images/characters/Female/Female%252022-3.png": "80b24bf3eb549972ea6d1054f2f76bc5",
"assets/assets/images/characters/Female/Female%252002-2.png": "fcd3ad6823225aa623f38728f4370c69",
"assets/assets/images/characters/Female/Female%252024-1.png": "b6a29d04196491d4831845bca37b79f5",
"assets/assets/images/characters/Female/Female%252019-1.png": "fd172ccff54eb5478419d3abd903849a",
"assets/assets/images/characters/Female/Female%252004-4.png": "2b6f19166095564868d7000bbeffcc41",
"assets/assets/images/characters/Female/Female%252020-4.png": "8ba5e9ef8f11f92a53cbd87b83fda70f",
"assets/assets/images/characters/Female/Female%252002-3.png": "9d7c1214da51609c3dd7015d74bb9262",
"assets/assets/images/characters/Female/Female%252002-1.png": "27cd63a9156a7266db6605d064f52bed",
"assets/assets/images/characters/Female/Female%252019-2.png": "eb4a28403076cb3e0a86570da18139b6",
"assets/assets/images/characters/Female/Female%252022-4.png": "583b47dcbc2c1d6b1fc898aa24acf571",
"assets/assets/images/characters/Female/Female%252006-4.png": "af4ab8d20e63da85ad2a3219db91140e",
"assets/assets/images/characters/Female/Female%252019-3.png": "73d11110d35cdf5356750a61a65818cb",
"assets/assets/images/characters/Female/Female%252007-3.png": "52f47a1d3a6a68420c05600f344e8942",
"assets/assets/images/characters/Female/Female%252018-4.png": "edb3b97855d10ab9e456abbc3aa5cff3",
"assets/assets/images/characters/Female/Female%252005-1.png": "736b6309f29d2a949f0120ca48fe632f",
"assets/assets/images/characters/Female/Female%252001-4.png": "d9be51aead49da89b057b932267cd805",
"assets/assets/images/characters/Female/Female%252007-2.png": "7614c91b7e80ed5b07b3823105c48d59",
"assets/assets/images/characters/Female/Female%252021-1.png": "fcc3d99ae9ca61ca635cc5d94bbd0bf0",
"assets/assets/images/characters/Female/Female%252021-3.png": "a0431feca70d9a69a223a59f93f06a1e",
"assets/assets/images/characters/Female/Female%252005-2.png": "80cf0f4a3257ec50830f5e124099c9e3",
"assets/assets/images/characters/Female/Female%252023-1.png": "9ef70119814e8fe078b3d5934f73c48d",
"assets/assets/images/characters/Female/Female%252003-4.png": "f1067294abc451d0dd6a3e125b555273",
"assets/assets/images/characters/Female/Female%252005-3.png": "47e7513edf536323225df90e6b90a3b7",
"assets/assets/images/characters/Female/Female%252021-2.png": "be16ed178906524e14cc14a395b1197a",
"assets/assets/images/characters/Female/Female%252007-1.png": "75b5a35935af1a33a30403c93adb5975",
"assets/assets/images/characters/Female/Female%252018-2.png": "607021da27147ba9f205f0938d85cfc5",
"assets/assets/images/characters/Female/Female%252003-1.png": "2b6080040cd90facc97e1a33b8703cea",
"assets/assets/images/characters/Female/Female%252001-3.png": "31d6bb6cc52cff43314dc6c47f359a4a",
"assets/assets/images/characters/Female/Female%252001-2.png": "80bb3ce03b0efe64d52f87c3d6d8e58b",
"assets/assets/images/characters/Female/Female%252018-3.png": "8c4eaacb2e2363589987d7f4a70b78c5",
"assets/assets/images/characters/Female/Female%252007-4.png": "f5f87b090f7fe374677f0053dee6281f",
"assets/assets/images/characters/Female/Female%252018-1.png": "e047d4b7a4bb25ba0c169420cd486ece",
"assets/assets/images/characters/Female/Female%252005-4.png": "ca1ebfc69940e2271f09788efba22ce8",
"assets/assets/images/characters/Female/Female%252003-2.png": "ad0ff7ebfd3172b19e4ab5c421586d86",
"assets/assets/images/characters/Female/Female%252025-1.png": "d3c54c4ac93230f4ca4a976ec9802927",
"assets/assets/images/characters/Female/Female%252001-1.png": "cb929f6311c1ed614d587c9d5127d937",
"assets/assets/images/characters/Female/Female%252003-3.png": "39e488314834e710b3aaa01d3bb2e91f",
"assets/assets/images/characters/Female/Female%252021-4.png": "c8e516fba666525fd841da95b907aa07",
"assets/assets/images/characters/Female/Female%252016-2.png": "c9066d30509f241065c216f63af5b1e1",
"assets/assets/images/characters/Female/Female%252010-4.png": "def5284dad2fd2b318f28d4ad237a3af",
"assets/assets/images/characters/Female/Female%252016-3.png": "9f36f48561bcc46808851b2d5ffc355e",
"assets/assets/images/characters/Female/Female%252014-1.png": "b8e60c07912f255087a9c1b1f0d88e00",
"assets/assets/images/characters/Female/Female%252009-4.png": "2649b9170d2f501b6185286632e9216f",
"assets/assets/images/characters/Female/Female%252014-3.png": "4753aa9f928685527f5bbb624058f708",
"assets/assets/images/characters/Female/Female%252016-1.png": "c0e351d5f9f341b88dd05b7304759c50",
"assets/assets/images/characters/Female/Female%252012-4.png": "6e0772cb8b5323ee4fe0f8eee24c27de",
"assets/assets/images/characters/Female/Female%252014-2.png": "db722f84dd52d8fc4d3c338cd1e141b5",
"assets/assets/images/characters/Female/Female%252009-3.png": "95e896776a51cdf9887fd69f8e75fb19",
"assets/assets/images/characters/Female/Female%252016-4.png": "c5e32a247c8c124595665b79a1e99421",
"assets/assets/images/characters/Female/Female%252010-2.png": "b3f92fa0569ae1ff29a197aff24c3d9b",
"assets/assets/images/characters/Female/Female%252012-1.png": "3305e12962e0caef4309edbdfc234020",
"assets/assets/images/characters/Female/Female%252010-3.png": "664f5c07e7500ef36a51684fdd898fad",
"assets/assets/images/characters/Female/Female%252009-2.png": "0717963789ff12a490efbf627e31e014",
"assets/assets/images/characters/Female/Female%252010-1.png": "50699c81c473f221b97d09529270329a",
"assets/assets/images/characters/Female/Female%252012-3.png": "9ccfcdb3a07dcba1f6aa62b7e87e3a74",
"assets/assets/images/characters/Female/Female%252012-2.png": "7e677adacf06e8b2adf673633119120c",
"assets/assets/images/characters/Female/Female%252014-4.png": "79b93b7df53851bdda26939cf2a0a2d7",
"assets/assets/images/characters/Female/Female%252009-1.png": "80929a36019cc965e9c5678eceec3d27",
"assets/assets/images/characters/Female/Female%252017-1.png": "9111dc70d8358fa4995dd7f7ee897ea2",
"assets/assets/images/characters/Female/Female%252015-3.png": "ca943f37361c823523138287c49a0525",
"assets/assets/images/characters/Female/Female%252015-2.png": "7deab171c74cddcbd6c5cbd71dff88ca",
"assets/assets/images/characters/Female/Female%252013-4.png": "169e880f363f367523e54b41ab45dbdc",
"assets/assets/images/characters/Female/Female%252011-4.png": "4e40d2a5909679e79fde5e0629bed123",
"assets/assets/images/characters/Female/Female%252017-2.png": "c96db3fa9b71426543de4596f1bb645c",
"assets/assets/images/characters/Female/Female%252015-1.png": "700ef4cf5a26b34295a78113bbf22bfb",
"assets/assets/images/characters/Female/Female%252008-4.png": "6964e82bc48c64ad579447469422cb0d",
"assets/assets/images/characters/Female/Female%252017-3.png": "d1f54ea34b0963102bd874ea5fd290f0",
"assets/assets/images/characters/Female/Female%252013-3.png": "6f94eed1801ecebf7b33d9f6aa426e65",
"assets/assets/images/characters/Female/Female%252011-1.png": "7081ec2a647db77e702350daeb480ad6",
"assets/assets/images/characters/Female/Female%252015-4.png": "a322a765de81e75d69eaf55896344b48",
"assets/assets/images/characters/Female/Female%252008-1.png": "52a0b73ad7a4ad79073db4f9cb7e5b88",
"assets/assets/images/characters/Female/Female%252013-2.png": "ecc9dcd570c5355ecc6d367f68b6c448",
"assets/assets/images/characters/Female/Female%252011-2.png": "9e247aa19df67635c81dbc26b02209af",
"assets/assets/images/characters/Female/Female%252017-4.png": "ff057070bf75f2c8816e749ab5a6a668",
"assets/assets/images/characters/Female/Female%252008-3.png": "3b4041b1ad6020c73974e1f42ddb0bcd",
"assets/assets/images/characters/Female/Female%252008-2.png": "009dca8601d5ac3ae98724c65f51e54c",
"assets/assets/images/characters/Female/Female%252011-3.png": "72b2394d2a816fcf43bca18d797eb306",
"assets/assets/images/characters/Female/Female%252013-1.png": "f9cbbf1381068c2350076f0f04f05b68",
"assets/assets/images/solaria/solaria_tiles.png": "9e051d6de6210d98bee657cec93a1ca1",
"assets/assets/images/solaria/solaria_tiles.tsj": "18cb04389b1cd04cf94ebae75367144c",
"assets/assets/images/solaria/map.tmj": "f9023cf7a3e61f5476dbf8e8940c1c9f",
"assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"assets/assets/images/npc/critter_run_right.png": "fe08ed1dcc559998705239d5925a6ab1",
"assets/assets/images/npc/wizard_idle.png": "b05bbd5361ae3eac51138a70c8278efc",
"assets/assets/images/npc/critter_run_left.png": "145c02015fea8ed28f964ec0ca686d84",
"assets/assets/images/npc/critter_idle.png": "609755d64e5a0dbcd7b6507ab816e55a",
"assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"assets/assets/images/furniture.png": "63948b94a5eaca29b9e523ba1d3bbaf2",
"assets/assets/images/player/attack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/pirate.png": "3129a70b4ba971c0b0f99c386fb4b2ab",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/attack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/attack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/attack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/audio/sword_hit.wav": "f5b82499d8a142e9a1d5045ff4783bb4",
"assets/assets/audio/action.wav": "3dc5915a3dc0b60c7b8e46fb83c490df",
"assets/assets/audio/fire_ball.wav": "39616e90322257f751a8f132b0e121ab",
"assets/assets/bgm/menu.mp3": "b50d64b3785375247ad71a8864af7edb",
"assets/assets/bgm/fight_boss.mp3": "d6c6af5e28b29529dfc58b90b73a92e0",
"assets/assets/bgm/game_bgm.mp3": "3820b05ac9395a532d1d2bd2d74c5d3f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
