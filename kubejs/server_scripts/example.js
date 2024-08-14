// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:distillation_tower/naquadria_waste_separation" })
    event.remove({ id: "gtceu:distillation_tower/enriched_naquadah_waste_separation" })
    event.recipes.gtceu.distillation_tower('test1')
        .inputFluids(Fluid.of('gtceu:enriched_naquadah_waste', 2000))
        .itemOutputs('2x gtceu:small_barium_sulfide_dust')
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 350))
        .outputFluids(Fluid.of('gtceu:naquadria_solution', 150))
        .outputFluids(Fluid.of('minecraft:water', 1500))
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.distillation_tower('test2')
        .inputFluids(Fluid.of('gtceu:naquadria_waste', 2000))
        .itemOutputs('2x gtceu:small_gallium_sulfide_dust')
        .outputFluids(Fluid.of('gtceu:sulfuric_acid', 500))
        .outputFluids(Fluid.of('gtceu:naquadria_solution', 350))
        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 150))
        .outputFluids(Fluid.of('minecraft:water', 1500))
        .duration(300)
        .EUt(480)
    event.recipes.gtceu.centrifuge('test3')
        .inputFluids(Fluid.of('gtceu:impure_enriched_naquadah_solution', 2000))
        .itemOutputs('gtceu:trinium_sulfide_dust')
        .outputFluids(Fluid.of('gtceu:enriched_naquadah_solution', 500))
        .outputFluids(Fluid.of('minecraft:water', 500))
        .itemOutputs('2x gtceu:antimony_trifluoride_dust')
        .duration(400)
        .EUt(1920)
    event.recipes.gtceu.centrifuge('test4')
        .inputFluids(Fluid.of('gtceu:impure_naquadria_solution', 2000))
        .itemOutputs('gtceu:indium_phosphide_dust')
        .itemOutputs('2x gtceu:antimony_trifluoride_dust')
        .outputFluids(Fluid.of('gtceu:naquadria_solution', 500))
        .outputFluids(Fluid.of('minecraft:water', 500))
        .duration(400)
        .EUt(1920)
    event.remove({ id: 'gtceu:centrifuge/impure_naquadria_solution_separation' })
    event.remove({ id: 'gtceu:centrifuge/impure_enriched_naquadah_solution_separation' })
    event.recipes.gtceu.large_chemical_reactor('test5')
        .itemInputs('gtceu:sodium_dust')
        .inputFluids("minecraft:water 1000")
        .circuit(1)
        .itemOutputs('3x gtceu:sodium_hydroxide_dust')
        .outputFluids("gtceu:hydrogen 1000")
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.large_chemical_reactor('test6')
        .inputFluids(Fluid.of('gtceu:hydrogen', 2000))
        .itemInputs('7x gtceu:sodium_sulfate_dust')
        .itemOutputs('2x gtceu:sodium_dust')
        .outputFluids('gtceu:sulfuric_acid 1000')
        .duration(30)
        .EUt(30)
    event.remove({ id: 'gtceu:large_chemical_reactor/rhodium_sulfate_to_solution' })
    event.remove({ id: 'gtceu:chemical_reactor/rhodium_sulfate_to_solution' })
    event.remove({ id: 'gtceu:large_chemical_reactor/rhodium_sulfate_to_solution_l' })
    event.recipes.gtceu.large_chemical_reactor('test7')
        .inputFluids('minecraft:water 36000')
        .inputFluids('gtceu:rhodium_sulfate_gas 39600')
        .inputFluids('gtceu:oxygen 25000')
        .circuit(11)
        .outputFluids(Fluid.of('gtceu:potassium', 7200))
        .outputFluids(Fluid.of('gtceu:rhodium_sulfate', 50000))
        .itemOutputs('4x gtceu:inert_metal_mixture_dust')
        .EUt(30)
        .duration(1200)
    event.recipes.gtceu.fluid_solidifier('test8')
        .inputFluids(Fluid.of('gtceu:potassium', 144))
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('kubejs:potassium_ingot')
        .EUt(7)
        .duration(20)
    event.recipes.gtceu.macerator('test9')
        .itemInputs('kubejs:potassium_ingot')
        .itemOutputs('gtceu:potassium_dust')
        .duration(39)
        .EUt(4)
    event.remove({ output: Fluid.of('gtceu:concentrated_platinum', 9000) })
    event.remove({ id: 'gtceu:chemical_reactor/iridium_chloride_separation' })
    event.remove({ id: 'gtceu:large_chemical_reactor/iridium_chloride_separation' })
    event.recipes.gtceu.large_chemical_reactor('test10')
        .itemInputs('gtceu:iridium_chloride_dust')
        .itemInputs('gtceu:calcium_dust')
        .itemOutputs('gtceu:metal_sludge_dust')
        .itemOutputs('gtceu:iridium_dust')
        .itemOutputs('3x gtceu:calcium_chloride_dust')
        .EUt(1920)
        .duration(300)
    event.remove({ id: 'gtceu:mixer/nitration_mixture' })

    event.remove({ id: 'gtceu:create_mixer/nitration_mixture' })
    event.recipes.gtceu.large_chemical_reactor('test11')
        .itemInputs('9x gtceu:platinum_metal_dust')
        .inputFluids('gtceu:nitration_mixture 9000')
        .circuit(9)
        .outputFluids('gtceu:concentrated_platinum 9000')
        .itemOutputs('gtceu:platinum_slag_dust')
        .EUt(30)
        .duration(2250)
    event.recipes.gtceu.mixer('test12')
        .inputFluids('gtceu:diluted_sulfuric_acid 1000')
        .inputFluids('gtceu:nitric_acid 1000')
        .outputFluids('gtceu:nitration_mixture 2000')
        .EUt(30)
        .duration(30)
    event.remove({ id: 'gtceu:large_chemical_reactor/osmium_dust_completion' })
    event.remove({ id: 'gtceu:chemical_reactor/osmium_dust_completion' })
    event.recipes.gtceu.large_chemical_reactor('test13')
        .inputFluids('gtceu:osmium_tetroxide 1000')
        .inputFluids('gtceu:hydrochloric_acid 6000')
        .outputFluids('gtceu:chlorine 36000')
        .outputFluids('minecraft:water 2000') 
        .itemOutputs('gtceu:osmium_dust')
    event.replaceOutput({ id: 'gtceu:electric_blast_furnace/rarest_metal_residue' }, Fluid.of('gtceu:steam', 1000), Fluid.of('gtceu:steam', 4500))
    event.remove({id:'gtceu:electrolyzer/decomposition_electrolyzing_rock_salt'})
    event.remove({id:'gtceu:electrolyzer/decomposition_electrolyzing_potassium_hydroxide'})
    event.remove({id:'gtceu:large_chemical_reactor/potassium_carbonate'})
    event.remove({id:'gtceu:chemical_reactor/potassium_carbonate'})
    event.remove({id:'gtceu:electrolyzer/decomposition_electrolyzing_potassium_carbonate'})
}) 




