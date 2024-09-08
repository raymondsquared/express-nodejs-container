.PHONY: build publish

build:
	cd src && docker build . -t express-nodejs-container --platform linux/amd64 && docker tag express-nodejs-container raymondsquared/express-nodejs-container:0.0.1-alpha

publish:
	cd src && docker push raymondsquared/express-nodejs-container:0.0.1-alpha
