# About

I am a computer science student at Georgia Tech, concentrating on Devices and Systems & Architecture.
When time allows, I work on full-stack side projects and rice my Linux desktop.

Beyond sitting behind a screen and working on side projects, I enjoy playing sports with friends and exploring mountains and caves.

![Sunset over Yonah Mountain](../content/images/mtns.webp)
_Sunset over Yonah Mountain, September 2024_

![Rappel down Starter Pit in Ellison's Cave](../content/images/starter_pit.webp)
_Starter Pit in Ellison's Cave, March 2026_

## Technical Philosophy

Every developer has their dogmas, so here I list some beliefs I have about how software should be designed, written, and maintained.

### Free Software

Free software isn't software that doesn't cost money; it is the idea that "gives the user the freedom to share, study, and modify it." The Free Software Movement of the 80's and 90's served to liberate users and developers from digital tyranny by megacompanies distributing rigid, proprietary software. Virtually every tool, every company, and every computer on earth rely on some result of the movement. Free software undergirds how your computer and phone download files from the internet, play video and audio, and display websites, among countless other operations. In fact, Linux, possibly the most popular result of the Free Software Movement, runs roughly 44% of all cloud compute in the world.[^1]

This movement is the root of most creativity, freedom, and research regarding software and the internet. While the movement largely succeeded in its goals, the majority of software that people use today is proprietary code on top of these projects. Hackability and privacy are locked under binary blobs of code.

Developers today ought to honor the philosophy that gave them their ability to learn from and contribute to codebases. In almost every circumstance, I believe in writing free and open source software, even when it may make immediate profitability more difficult for a company.

For more information on free software, see the Free Software Foundation's literature[^2].

### Minimize Complexity

As a developer, one should **always** be seeking to minimize complexity.
Often, how complex a project will be is determined when the idea is conceived.
Choice of architecture and feature scope affect complexity the most, which may materializes short or long after the choices were made.

The Unix philosophy encompasses this idea well. One of the creators of the philosophy compiled the following "maxims."[^3]

- Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new features.
- Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don't insist on interactive input.
- Design and build software, even operating systems, to be tried early, ideally within weeks. Don't hesitate to throw away the clumsy parts and rebuild them.
- Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.[^4]

As outlined above, these projects defined the software world, so the maxims that built Unix should at least be considered.
However, organizations today seem desperate to pack as many hot new features in their software using the hot new framework that came out last week.
The NPM JavaScript ecosystem particularly causes feature packed websites at the cost of bloated development environments, slower load times, and a fresh vulnerability each week.[^5]

Most of the time, the complexity is inevitable based upon the stack, as is the case of most websites. Other times, often under large companies, software begins relatively simple, then _feature creep_ occurs.

To give an example of the consequences of complexity, consider Microsoft Outlook.
The email service used to be a favorite among profesisonals using Windows.
Recently, it has fallen from grace due to a variety of software design choices that resulted in _New Outlook_.

- Native backend ditched in favor of Edge WebView2
- AI buttons littered about the UI
- Clean Windows 10 style UI updated to clunky [Fluent 2](https://fluent2.microsoft.design/) components

These changes resulted in a [slow](https://www.windowslatest.com/2026/06/15/microsofts-new-outlook-takes-10-seconds-to-do-what-outlook-classic-does-instantly-on-windows/) web app that [regresses in its capabilities](https://support.microsoft.com/en-us/outlook/getstarted/feature-comparison-between-new-outlook-and-classic-outlook) and forces AI and [Edge](https://support.microsoft.com/en-US/Outlook/web-links-from-outlook-emails-and-teams-chats-open-in-microsoft-edge) down the user's throat.
Despite its flaws, Classic Outlook was functional and had a clear UI. The complexity of switching backends, updating to an undercooked design system, and rapidly adding AI "features" destroyed Outlook.

Unfortunately, the idea of minimizing complexity is not taken seriously enough today. _Minimalism_ is either touted as a feature by developers trying to glaze their small project or sequestered to a subculture of the Linux development world.

Lines of code is not a metric to brag about, unless the number is small and the software is very useful. The [suckless](https://suckless.org) group exemplify good software resulting form minimal complexity. Their philosophy is worth a read.[^6]

<!-- ### Pop Web Design is Ugly and Unusable -->
<!---->
<!-- Consider a popular recipe website like [allrecipes.com](https://www.allrecipes.com/). -->

## Contact

I don't have any social media. For business purposes, reach out to <dgdurling@pm.me>. Resume available upon credible request.

## Links

- [Git server](https://git.dgd.sh)
- [GitHub (mirror)](https://github.com/daqnal)
- [LinkedIn](https://linkedin.com/in/dgdur) (I don't check messages here)

---

This site was made using [Astro](https://astro.build) and pure CSS and JS.
See the source code [here](https://git.dgd.sh/dan/dgd.dev).

[^1]: [Server Operating System Market Size, Outlook & Report Analysis, 2031](https://www.mordorintelligence.com/industry-reports/server-operating-system-market)

[^2]: [What is Free Software?](https://www.fsf.org/about/what-is-free-software)

[^3]: [Basics of the Unix Philosophy](http://www.catb.org/~esr/writings/taoup/html/ch01s06.html)

[^4]: [UNIX Time-Sharing System: Forward](https://archive.org/details/bstj57-6-1899/page/n3/mode/2up)

[^5]: [Bundlephobia](https://bundlephobia.com)

[^6]: [suckless software philosophy](https://suckless.org/philosophy/)
