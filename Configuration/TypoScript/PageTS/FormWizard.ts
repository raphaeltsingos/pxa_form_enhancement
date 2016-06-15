mod.wizards {
    form {
        defaults {
            tabs {
                form.accordions.postProcessor {
                    showPostProcessors := addToList( saveForm)
                    postProcessors {
                        saveForm {
                            showProperties = pid, defaultName, uploadFolder, storageUid
                        }
                    }
                }

                elements.accordions.basic.showButtons := addToList( recaptcha)

                options.accordions.validation {
                    showRules := addToList( recaptcha)
                    rules {
                        recaptcha {
                            showProperties = message, error, showMessage
                        }
                    }
                }
            }
        }

        elements {
            recaptcha {
                showAccordions = label, attributes, validation
                accordions {
                    attributes {
                        showProperties = name, class
                    }
                    validation {
                        showRules = recaptcha
                    }
                }
            }
        }
    }
}