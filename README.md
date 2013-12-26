# hello-om

A simple hello world example of [https://github.com/swannodette/om](https://github.com/swannodette/om)

You should know a couple things before looking at this project.

1. I don't know what I'm doing. I've spent some time with Clojure, but
   not really Clojurescript or React.js.
1. Om is pre-alpha. That means that this will probably stop working as
   soon as I push it to github.

I've tried to make something that has some interaction and is easy to
grok. Maybe someone else gets something out of this. If not, I'm not
going to worry about it.

I checked in the compiled javascript to the gh-pages branch so you can
see this code running at http://ryfow.github.com/hello-om/resources/public/index.html

## Usage

1. clone `https://github.com/swannodette/om.git` and `lein install` it.
1. clone `https://github.com/ryfow/hello-om.git`
1. run `lein cljsbuild once` in your hello-om clone directory
1. run `lein ring server` in your hello-clone directory

## License

Copyright © 2013 Ryan Fowler

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

## Contributing

Sure. Send a pull request or something.
