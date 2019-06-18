var _ = require('lodash')
var Promise = require('bluebird')

enduro.templating_engine.registerHelper('services', function (options) {

    // will store all the services entries
    var services_entries

    // get_cms_list will return a structured list of all pages in a project
    return enduro.api.pagelist_generator.get_cms_list()
        .then((pagelist) => {

            // will store the promises from reading all the services entries
            var get_content_promises = []

            services_entries = _.chain(pagelist.structured.services)
                .filter((o) => { return typeof o === 'object' }).value() // filter pages only

            // goes through all the services entries and loads their content
            for (page_id in services_entries) {
                var page = services_entries[page_id]

                function get_content (page) {
                    get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => { page.services_entry = content }))
                }

                get_content(page)
            }

            return Promise.all(get_content_promises)
        })
        .then(() => {

            // pass services entries as context for the template
            return options.fn(services_entries)
        })
})
