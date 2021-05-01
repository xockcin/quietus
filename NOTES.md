## 3/26/21

The idea is simple: An aggressively minimalistic project management tool to quiet your mind while you plan your projects and your workdays. The app logic and data-handling will be totally boilerplate. What matters is how it looks.

That is what I'm working on right now. My look and feel is faux-Mondrian, nice bold colors and thick black borders against white. That is easy enough. The tricky part is getting the buttons to look the way I want them to look.

## 4/14/21

I am returning to this project after a few weeks away from it, partly because I want to work on something other than Bitgame, partly because I need more projects to fill out my portfolio, but mostly just because I want to use it!

Interesting insight: The other day, before deleting my Facebook account, I downloaded all my data, and spent a while browsing through my old posts, among which I was fascinated to find a request for a to-do app that bears a striking resemblance to this very project. That post was from, I believe, 2013? I guess I'm a guy who knows what he wants.

My initial mistake was to focus immediately on making it look the way I wanted it to look without first figuring out how I want it to work. So let me restate my intentions.

You open it up and see a bunch of icons, arrayed like phone apps. Each one represents a project. At first, each icon shows just the name of the project. If you click on it, it expands slightly, with an animation, and shows a little more information about the project. Which pieces of information get displayed could be customized - by default it would be, say, subtitle, last modified, next step.

This expanded view would also present a "view project" button, which would take the user to another screen. Call it the project screen.

The design of this screen needs to be fleshed out more. Of course there is the title of the project at the top, maybe an icon or graphic to the side, the subtitle underneath the title, a created date and last modified date on the other side.

## 5/1/21

Coming back to this after a couple of weeks not looking at it. I have changed it so that the button expands and contracts on click, using useState.

I'm not sure what to do next. Let's think about it. What is this app? It is a minimal-minimal task and project management tool. Its purpose is to put the user - me - into a quiet and focused state of mind. 