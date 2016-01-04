kubectl run cheeky-api --image=cheeky-api-image --port=80

kubectl expose rc cheeky-api --port=3000 --target-port=80