RABBITMQ := rabbitmq

RABBITMQ_BUILD := $(BUILD_HELPER_DIR)/$(RABBITMQ)-build
RABBITMQ_INSTALL := $(BUILD_HELPER_DIR)/$(RABBITMQ)-install

.PHONY: $(RABBITMQ_BUILD)
$(RABBITMQ_BUILD):
	$(TOUCH) $@

.PHONY: $(RABBITMQ_INSTALL)
$(RABBITMQ_INSTALL): $(RABBITMQ_BUILD)
	$(TOUCH) $@
