(defproject hello-om "0.1.0-SNAPSHOT"
  :description "Really simple Om example."
  :url "http://github.com/ryfow/hello-om"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2127"]
                 [om "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "1.0.1"]
            [lein-ring "0.8.8"]]
  :ring {:handler hello-om.server/app}
  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src"]
             :compiler {
                        :output-to "resources/public/js/hello-om.js"
                        :output-dir "resources/public/js/"
                        :optimizations :none
                        :source-map true
                        :externs ["react/externs/react.js"]}}]})
