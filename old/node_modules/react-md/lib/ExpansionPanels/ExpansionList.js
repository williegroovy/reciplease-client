(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-dom', 'classnames', '../constants/keyCodes', '../utils/EventUtils/handleWindowClickListeners'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-dom'), require('classnames'), require('../constants/keyCodes'), require('../utils/EventUtils/handleWindowClickListeners'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactDom, global.classnames, global.keyCodes, global.handleWindowClickListeners);
    global.ExpansionList = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDom, _classnames, _keyCodes, _handleWindowClickListeners) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _handleWindowClickListeners2 = _interopRequireDefault(_handleWindowClickListeners);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ExpansionList = function (_PureComponent) {
    _inherits(ExpansionList, _PureComponent);

    function ExpansionList(props) {
      _classCallCheck(this, ExpansionList);

      var _this = _possibleConstructorReturn(this, (ExpansionList.__proto__ || Object.getPrototypeOf(ExpansionList)).call(this, props));

      _this.state = { columnWidths: [], focusedIndex: -1 };

      _this._setContainer = _this._setContainer.bind(_this);
      _this._removeFocus = _this._removeFocus.bind(_this);
      _this._calcColumnWidths = _this._calcColumnWidths.bind(_this);
      _this._determineTabFocus = _this._determineTabFocus.bind(_this);
      return _this;
    }

    _createClass(ExpansionList, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.children !== nextProps.children) {
          this._calcColumnWidths();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        var focusedIndex = this.state.focusedIndex;

        if (prevState.focusedIndex === focusedIndex || prevState.focusedIndex > -1 && focusedIndex > -1) {
          return;
        }

        (0, _handleWindowClickListeners2.default)(this._removeFocus, this.state.focusedIndex !== -1);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.state.focusedIndex === -1) {
          (0, _handleWindowClickListeners2.default)(this._removeFocus, false);
        }

        window.removeEventListener('keyup', this._determineTabFocus);
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        if (container !== null) {
          this._container = (0, _reactDom.findDOMNode)(container);
          window.addEventListener('keyup', this._determineTabFocus);

          this._calcColumnWidths();
        }
      }
    }, {
      key: '_determineTabFocus',
      value: function _determineTabFocus(e) {
        if ((e.which || e.keyCode) === _keyCodes.TAB) {
          var panels = Array.prototype.slice.call((0, _reactDom.findDOMNode)(this).querySelectorAll('.md-panel-header'));
          this.setState({ focusedIndex: panels.indexOf(e.target) });
        }
      }
    }, {
      key: '_removeFocus',
      value: function _removeFocus() {
        this.setState({ focusedIndex: -1 });
      }
    }, {
      key: '_calcColumnWidths',
      value: function _calcColumnWidths() {
        if (!this._container) {
          return;
        }

        var columnWidths = Array.prototype.slice.call(this._container.querySelectorAll('.md-panel-header')).reduce(function (maxes, row) {
          var columns = row.querySelectorAll('.md-panel-column');
          for (var i = 0; i < columns.length; i++) {
            // Only need to include the offsetWidth of the column because the child will really
            // determine the width of the column. Since it has already been defined at this point,
            // no additional work needs to be done.
            maxes[i] = Math.max(columns[i].offsetWidth, maxes[i] || 0);
          }

          return maxes;
        }, [0]);

        this.setState({ columnWidths: columnWidths });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            columnWidths = _state.columnWidths,
            focusedIndex = _state.focusedIndex;

        var _props = this.props,
            children = _props.children,
            className = _props.className,
            component = _props.component,
            props = _objectWithoutProperties(_props, ['children', 'className', 'component']);

        return (0, _react.createElement)(component, _extends({}, props, {
          ref: this._setContainer,
          className: (0, _classnames2.default)('md-expansion-panel-list', className)
        }), _react.Children.map(children, function (child, i) {
          return (0, _react.cloneElement)(child, {
            key: child.key || i,
            columnWidths: columnWidths,
            focused: focusedIndex === i
          });
        }));
      }
    }]);

    return ExpansionList;
  }(_react.PureComponent);

  ExpansionList.propTypes = {
    /**
     * An optional style object to apply to the list.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply to the list.
     */
    className: _propTypes2.default.string,

    /**
     * The children should be a list or singular `ExpansionPanel` component
     * to render with some additional props injected.
     */
    children: _propTypes2.default.node,

    /**
     * The component to render the list as.
     */
    component: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired
  };
  ExpansionList.defaultProps = {
    component: 'ul'
  };
  exports.default = ExpansionList;
});