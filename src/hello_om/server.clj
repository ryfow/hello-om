(ns hello-om.server
  (:require [ring.middleware.resource :as resources]
            [ring.util.response :as resp]
            [ring.middleware.file :refer [wrap-file]]
            [ring.middleware.file-info :refer [wrap-file-info]]))


(def app
  (->
   (fn [req] nil)
   (wrap-file "resources/public")
   (wrap-file-info)))
