---
title: The macinplanck; My EZ Planck Configuration
date: 2020-01-01
slug: macinplanck-configuration
tags: ['post', 'qmk']
---

I've gotten a new keyboard; a keyboard that I had scoffed at using not too long ago because "lol where's all the keys?". That keyboard is the [Planck EZ Glow](https://ergodox-ez.com/pages/planck). This post is to describe how I have it setup, not to give a whole backstory as to why I decided to get it (that's for me and my journal to know, tyvm). I will be affectionately referring to my keyboard as the **macinplanck** from here on out.

Some front-matter before I get into things:

- Currently, I've done nothing everything through [the Oryx configurator online](https://configure.ergodox-ez.com/); I know that macros and such exist in QMK, and I fully understand that there are some things that I describe that could be accomplished more efficiently via editing the `keymap.c` directly, I just didn't have the time (nor the patience) to get into that this time around.
- I've been getting more and more into Vim, which is what inspired me to set up the keyboard the way that I did.

## Links and Resources

Here are links to my current configuration:

- [Planck EZ Configurator (my current, full setup)](https://configure.ergodox-ez.com/planck-ez/layouts/K0rgz/OvZ4W/0)
- [Relevant `.bin`, source, and PDF files](https://github.com/macintacos/dotfiles/tree/master/keebs/macinplanck-ez) for my current layout.

...and here are resources that I used to configure my setup:

- [QMK Documentation](https://docs.qmk.fm/) (which are fantastic, btw) - a lot of acronyms below are coming straight out of this documentation, so it'd probably be handy to have this open as you read along.
- [vimhelp.org](https://vimhelp.org/) (if you don't know vim, one thing that you should know is that this is essentially your bible)
- [r/olkb](https://www.reddit.com/r/olkb/) (solved pretty much any issue I encountered in this keymap build by searching here)
- [Wally](https://github.com/zsa/wally/releases) (and it's `wally-cli` counterpart)

If [history is any indication](https://p-37FYgJ.b1.n0.cdn.getcloudapp.com/items/yAuLrDer/Image+2020-01-01+at+19.47.45.png?v=7038d4a6d045ee767c6e307b663cb190), the configuration that I'm about to describe will probably be out of date by this time tomorrow, but I feel that if I write down my thoughts, it helps me pick out the holes in my logic and give me ideas for future improvements.

But anyway, who cares? Onto those sweet, juicy layers to make sense of wtf I even did.

## Layers

I currently have 9 layers (`Lower`, `Base`, `Raise`, `Adjust`, `NORMAL`, `VISUAL`, `NRMLSHFT`, `WINDOWZ`, and `LGUI_ALL`):

![](https://p-37FYgJ.b1.n0.cdn.getcloudapp.com/items/E0uEA9B5/Image+2020-01-01+at+17.04.16.png?v=01081508789b9b85ad9ebb151b1e22af)

Not the biggest of drawbacks, but for whatever reason you don't have the ability to edit the names if the first four tabs, or delete them. Removing the ability to delete them was understandable (otherwise it's kinda not a Planck), but the inability to rename them didn't really make sense to me. Oh well!

I'll be going through the `Base` layer first, just because that makes sense in my head, and move through all of the other layers in a sequential fashion.

### The `Base` Layer

A lot of this layer is the same as the default config. QWERTY layout, `lower`/`raise` are in the same spot, etc. Some distinguishing characteristics:

- `Hyper` is replaced with `TG(4)`, which brings you to the `NORMAL` layer.
- `Esc` is mapped to the equivalent of `LCTRL(KC_ESC)`, which means:
  - _Tap_ -> `Esc`
  - _Hold_ -> Left Control (modifier)
  - This is how it should be _on every keyboard_, don't @ me.
- `Tab` is mapped to the equivalent of `MEH_T(KC_TAB)`, which means:
  - _Tap_ -> `Tab`
  - _Hold_ -> Meh (Left control, Shift, and Alt)
  - This is done this way because I have many macros defined via [Keyboard Maestro](https://www.keyboardmaestro.com/) that launch applications by performing `Meh+<some-character>` (like [this](https://p-37FYgJ.b1.n0.cdn.getcloudapp.com/items/nOumPopW/Image+2020-01-01+at+18.11.20.png?v=5a50d59d1536b04cf63f96443b383652)).
- The `Lower` and `Raise` keys have been changed to `TT(LOWER)` and `TT(RAISE)`, respectively. This was done because of a couple of things:
  - Sometimes I like to stop and think about what numbers/symbols I'm going to use, and sometimes I know exactly what I want to do and then move on with typing. `TT()` suited this better; if you tap the key it'll bring you to the associated layer and then stay there, but if you _hold_ the key, you'll only activate the layer for as long as you hold the key (essentially, the default behavior of these keys).
  - Because I have modifiers in these layers (more on this below), keyboard shortcuts felt "clunky" to use when I switched to `Lower`/`Raise` in the default config, since you had to do essentially a dance, pressing multiple keys to get what you wanted. Changing this to that tapping the key brought you into the layer and then left you there allows me to compose shortcuts a little more fluidly.
- `Cmd` is slightly modified to be `OSM(MOD_LGUI)`, which is just fancy for "if I tap this key, the modifier is 'active' until I hit another key (or just wait)". This is useful for the chords I have mapped in VSCode (my editor of choice).

And that concludes our `Base` layer tour. Onwards!

### The `Lower` & `Raise` Layers

It helps to explain these both at the same time because there are a lot of similarities between the two, but with one key difference between the base config; the numbers and symbols have been swapped. When you look at a traditional keyboard, the number keys above the alphabetical characters have the number printed underneath the symbols, so in my mind they are "lower" than the symbols. As such, the `Lower` layer maps to number keys (and other keys that you get without pressing "shift" on a traditional keyboard) while the `Raise` layer maps to the symbols (and other keys that you get when pressing "shift" on a traditional keyboard). The Planck layout made more sense in my brain when I did that; your mileage may vary.

Also any action that I explicitly didn't set in a given layer, I marked it as "None", since by default the Oryx configurator marks other keys in the layer "transparent" to let the key fall through to the underlying layer. I do this in all layers except the `Base` layer. This was done because I didn't want to encounter any behavior that I didn't explicitly program. The `TT()` keys are not set to "None" because they still have a function; pressing one of those keys again will take you into the `Adjust` layer or will take you back to the `Base` layer, depending on which layer you're in.

The last "big thing" to note here (because it's common in other layers too) is that at this point, I've designated the `Esc` key as my "escape hatch" in all layers that could be considered "not transient" (meaning that I can press a key and that layer could remain active ever if I release the key). In almost all layers, the `Esc` key is mapped to `TO(1)`, which brings you back to the `Base` layer. There are other keys in other layers that do this, but the `Esc` key is supposed to be my "safe key" that gets me out of anywhere I might lose myself in.

Other things to note here:

- I removed all `F#` keys, since I basically never use them.
- I removed various other keys like `PgUp`/`PgDown` because I don't really find them to be all that useful (I have other shortcuts that accomplish the same thing) and I don't think that I'd use the Non-US characters.
- I brought back `Enter` and `Backspace` because they "made sense" to keep (I was gaining nothing by having them removed)
- I persisted the same modifier keys from the `Base` layer into both layers because I have a lot of application-specific shortcuts that rely on using these modifiers in conjunction with characters/symbols that are in these layers.

3 layers down, 9 to go.

### The `Adjust` Layer

I have the least to say about this layer. Note that we have the same "escape hatch", but all other keys remain the same as the default configuration. If you have any ideas what else I should put here, please let me know!

### The `NORMAL` Layer

This is where things get a bit more interesting, and where Vim's influence started getting the best of me. This layer is called `NORMAL` because, if you're in a text field that _isn't_ Vim (which happens more often than I would like), you can get some basic Vim motions that allow you to navigate text with this layer. To enumerate them the key mapping as it stands now, let's refer to the following table (anything not shown can be assumed to be "None"):

The last thing that I want to point out is that, although it's called `NORMAL`, this isn't mean to be the layer that you're always in, which is the case a lot of the time when you're in an actual Vim buffer. I had considered that, but then it got in the way of doing _actual_ Vim editing. So, to even though in a conceptual sense I try to consider the `Base` layer analogous to `INSERT` mode, they're still two very distinct concepts that shouldn't be intermingled.

### The `VISUAL` Layer

### The `NRMLSHIFT` Layer

### The `WINDOWZ` Layer

### The `LGUI_ALL` Layer

### Special Mention: RGB Handling

I didn't mention the colors yet, simply because the Planck layout is so much more intuitive once you start adding color that has meaning.

## Feedback (if anyone is listening)

After going through all of this, I've got some feedback.

- The Wally GUI application was a tad more unreliable than I would've liked. The `wally-cli` CLI tool was rock solid, though, and I've been using that for all of my flashing.
- Especially when I was in the midst of changing colors, I found it basically impossible to tell what color was already used from the per-key palettes when you selected a key. It'd be great if, when you selected a key in the UI, it'd also tell you what color you've assigned to that key.
- The UI disables the key that got you to the layer in question. This makes sense for layer actions like `MO()`, because the layer is only active when you are actively holding the key that got you there. However, for layer functions like `TT()` or `OSL()`, it's perfectly fine to lift your finger off the key that got you into that layer, freeing that key up for other actions. Unfortunately, the Oryx configurator doesn't distinguish these layer functions, and leaves them disabled in the destination layer regardless of what function type got you there. This made things like a `gg` motion in the `NORMAL` layer (which I would've mapped to `cmd+up`) pretty much impossible.

## What's next?

There are already multiple things that I want to improve upon.

- Add some more actions into the `Adjust` layer; I basically didn't modify it heavily because I couldn't think of anything, so this is ripe for improvement.
- Come up with some more common vim motions that I can accomplish without getting into macros; at a certain point, getting into macros will be inevitable, but using the GUI tool is so much easier than editing code (IMO) that I'm going to dread when I have to switch over.
- Mess around with creating more complex macros. There were a few chords/motions that I created that definitely could have been more cleanly be defined via macros, and that's probably the next thing that I'd get around to messing around with.
- I want to investigate using [leader keys with QMK](https://beta.docs.qmk.fm/features/feature_leader_key). Especially coming from Spacemacs, this capability made me salivate; but I knew that it would be an unending hole of complexity and opportunities that I just avoided it altogether. Maybe the next time I have 5 solid days of playing around, I'll do it, but right now... nope.

