/**
 * Count quantity wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSCountQty = {
    /**
     *
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      disableClass: 'disable'
    },

    /**
     *
     *
     * @var jQuery pageCollection
     */
    pageCollection: $(),

    /**
     * Initialization of Count quantity wrapper.
     *
     * @param String selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery pageCollection - collection of initialized items.
     */

    init: function (selector, config) {

      this.collection = selector && $(selector).length ? $(selector) : $();
      if (!$(selector).length) return;

      this.config = config && $.isPlainObject(config) ?
        $.extend({}, this._baseConfig, config) : this._baseConfig;

      this.config.itemSelector = selector;

      this.initCountQty();

      return this.pageCollection;

    },

    initCountQty: function () {
      //Variables
      var $self = this,
        config = $self.config,
        collection = $self.pageCollection;

      //Actions
      this.collection.each(function (i, el) {
        //Variables
        var $this = $(el),
          $plus = $this.find('.js-plus'),
          $minus = $this.find('.js-minus'),
          $max = $this.data('quantity-max'),
          $min = $this.data('quantity-min'),
          $result = $this.find('.js-result'),
          resultVal = parseInt($result.val()),
          disableClass = config.disableClass;

        if ($max && resultVal === $max) {
          $plus.addClass(disableClass);
        }

        if ($min && (resultVal === $min)) {
          $minus.addClass(disableClass);
        } else {
          if (resultVal === 0) {
            $minus.addClass(disableClass);
          }
        }

        $plus.on('click', function (e) {
          e.preventDefault();

          $minus.removeClass(disableClass);

          if ($max) {
            if (resultVal === $max - 1) {
              $plus.addClass(disableClass);
            }

            if (resultVal < $max) {
              resultVal += 1;

              $result.val(resultVal);
            } else {
              return false;
            }
          } else {
            resultVal += 1;
            $result.val(resultVal);
          }
        });

        $minus.on('click', function (e) {
          e.preventDefault();
          $plus.removeClass(disableClass);

          if ($min) {
            if (resultVal - 1 === $min) {
              $minus.addClass(disableClass);
            }

            if (resultVal > $min) {
              resultVal -= 1;

              $result.val(resultVal);
            } else {
              return false;
            }
          } else {
            if (resultVal - 1 === 0) {
              $minus.addClass(disableClass);
            }

            if (resultVal >= 1) {
              resultVal -= 1;

              $result.val(resultVal);
            } else {
              return false;
            }
          }
        });

        //Actions
        collection = collection.add($this);
      });
    }

  };

})(jQuery);
