var _ = require('lodash')
var Promise = require('bluebird')

enduro.templating_engine.registerHelper('internet', function (options) {

    // will store all the internet entries
    var internet_entries

    // get_cms_list will return a structured list of all pages in a project
    return enduro.api.pagelist_generator.get_cms_list()
        .then((pagelist) => {

            // will store the promises from reading all the internet entries
            var get_content_promises = []

            internet_entries = _.chain(pagelist.structured.internet)
                .filter((o) => { return typeof o === 'object' }).value() // filter pages only

            // goes through all the internet entries and loads their content
            for (page_id in internet_entries) {
                var page = internet_entries[page_id]

                function get_content (page) {
                    get_content_promises.push(enduro.api.flat.load(page.fullpath).then((content) => { page.internet_entry = content }))
                }

                get_content(page)
            }

            return Promise.all(get_content_promises)
        })
        .then(() => {

            // pass internet entries as context for the template
            return options.fn(internet_entries)
        })
})
