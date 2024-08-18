// This script was authored by @verneacv and is part of an addon for AllTheMods 10.
// This addon adds the Entangled Mod and modifies the recipes for the Entangled Block and the Entangled Item.
// This script is licensed under the MIT License. See the attached license file for more details.

ServerEvents.recipes(event => {
  event.remove({ output: 'entangled:block' });

  event.shaped(Item.of('entangled:block', 2), [
    'SUS',
    'UNU',
    'SUS'
  ], {
    S: 'ae2:singularity',
    U: 'allthemodium:unobtainium_block',
    N: 'allthemodium:vibranium_ingot'
  });

  event.remove({ output: 'entangled:item' });

  event.shaped('entangled:item', [
    ' OD',
    ' EO',
    'E  '
  ], {
    O: 'justdirethings:eclipsealloy_ingot',
    E: 'allthemodium:vibranium_ingot',
    D: 'minecraft:nether_star'
  });
});

// This script was authored by @verneacv and is part of an addon for AllTheMods 10.
// This addon is licensed under the MIT License.
// This script may not be used in public modpacks or other projects without explicit permission from the author.
