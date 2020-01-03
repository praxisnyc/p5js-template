NPM := npm
VENDOR_DIR := assets/vendors/

install:
	$(NPM) install

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/p5/lib/p5.min.js $(VENDOR_DIR)


serve: install include-npm-deps
	 browser-sync start -s -f="*"

