(ns hello-om.hello
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn name-change [owner state]
  (om/transact!
    state
    :name
    #(.-value (om/get-node owner "name"))))

(defn hello-om-base [{:keys [name] :as data} owner]
  (om/component
     (dom/form #js {:onSubmit #(do false)}
       (dom/h2 {} "What's your name?")
       (dom/input #js {:onChange #(name-change owner data)
                       :style #js {:fontSize "24px"}
                       :ref "name"})
       (dom/h1 #js {}
         (when-not (empty? name)
           (str "Hello, " name "."))))))

(def initial-state (atom {:name ""}))

(om/root initial-state
         hello-om-base
         (.getElementById js/document "reactContainer"))

