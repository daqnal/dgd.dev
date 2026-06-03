---
title: Introduction to Ricing in Linux
pubDate: 2026-06-01
desc: A comprehensive guide to customizing your Linux distro to your needs
tags: ["linux", "tech"]
draft: true
---

<!-- markdownlint-disable MD013 -->
<!-- markdownlint-disable MD012 -->

You're tired of Windows or Mac restricting your freedom, so you're getting into Linux.
While you can easily setup a Linux image with a pre-installed desktop environment like KDE or GNOME, the true spirit of the game is to assemble a desktop yourself. This article is a guide on how to configure each part of your own desktop. It aims to be distro-agnostic, so differences for init system, display server, etc... will be provided.

> Be aware that configuring your own desktop is not a skill you can completely learn in a day. You will eventually get stuck in a terminal with no clue what happened or how to get to your desktop. I highly recommend either dual-booting or learning on a different machine from your main workstation.

Major components of a custom desktop:

- Distribution
- Window manager or compositor
- Terminal emulator
- Program launcher
- Bar
- Notification/event daemon
- Wallpaper manager
- Qt/GTK theme manager
- Applets
  - Internet
  - Audio
  - Bluetooth

## Distribution

- Arch
- Nix
- Gentoo

The biggest trap for beginners is to spend way too much time and energy over choosing a distro, then keep switching when you run into any small issue. The best thing to do is **just pick one**. Every major distribution can give you your dream desktop. That being said, there are a few that stick out in the realm of customization.

### Arch

**Arch Linux** will take you as far as you want to go. Despite the memes of it being super difficult and unstable, getting started with Arch is not hard, and it rarely ever breaks. It is also (at the time of writing) the most popular distro for configuring custom desktops. With that popularity you get plenty of documentation and support.

The easiest way to setup Arch is using the `archinstall` script, included with modern Arch releases.

## Window Manager or Compositor

- X11/Xlibre
  - bspwm
  - i3
  - dwm
- Wayland
  - Hyprland
  - niri
  - mangowm

| Name                                          | Display Server | Difficulty | Pros                                   | Cons                         |
| --------------------------------------------- | -------------- | ---------- | -------------------------------------- | ---------------------------- |
| [Hyprland](https://hypr.land)                 | Wayland        | Easy       | Aesthetics, popularity                 | High resource usage          |
| [niri](https://github.com/niri-wm/niri)       | Wayland        | ?          | Scrolling desktop                      | ?                            |
| [mangowm](https://mangowm.github.io/)         | Wayland        | ?          | Lightweight, many layouts              | New                          |
| [i3](https://i3wm.org)                        | X              | Easy       | Popularity                             | ?                            |
| [bspwm](https://github.com/baskerville/bspwm) | X              | Medium     | Simple, reliable                       | ?                            |
| [dwm](https://dwm.suckless.org/)              | X              | Hard       | Minimal, maximally customizable with C | Anti-noob, manually compiled |

When choosing a WM/compositor, like the distro, **just pick one**. Instead of bouncing around to the new kid on the block because of a new feature, get comfortable with one, even if it's "old." To simplify the choice, if you want Wayland, go with **Hyprland**; if you want X, go with **i3**.

## Terminal Emulator

- kitty
- Alacritty
- Ghostty
- st
- WezTerm

| Terminal Emulator                         | Display Server | Pros                                                     | Cons              |
| ----------------------------------------- | -------------- | -------------------------------------------------------- | ----------------- |
| [kitty](https://sw.kovidgoyal.net/kitty/) | Both           | Fast, image, ligature, & link support, very configurable | -                 |
| [Alacritty](https://alacritty.org/)       | Both           | Very fast, easy config with TOML, global search          | -                 |
| [st](https://st.suckless.org/)            | X              | Minimal                                                  | Manually compiled |
