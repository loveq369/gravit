(function (_) {
    /**
     * The rectangle tool
     * @class GRectangleTool
     * @extends GShapeTool
     * @constructor
     */
    function GRectangleTool() {
        GShapeTool.call(this, true, true);
    }

    GObject.inherit(GRectangleTool, GShapeTool);

    /** @override */
    GRectangleTool.prototype._createShape = function () {
        return new GRectangle();
    };

    /** @override */
    GRectangleTool.prototype._updateShape = function (shape, area, line) {
        // Original shape is a rectangle with coordinates x,y: [-1, 1]. Transform it to fit into the area:
        /*shape.setProperty('trf',
            new GTransform(area.getWidth() / 2, 0, 0, area.getHeight() / 2,
                area.getX() + area.getWidth() / 2, area.getY() + area.getHeight() / 2));
        */
        shape.setProperties(['trf', 'w', 'h'], [new GTransform(1, 0, 0, 1, area.getX() + area.getWidth() / 2, area.getY() + area.getHeight() / 2), area.getWidth(), area.getHeight()]);
    };

    /** @override */
    GRectangleTool.prototype._hasCenterCross = function () {
        return true;
    };

    /** override */
    GRectangleTool.prototype.toString = function () {
        return "[Object GRectangleTool]";
    };

    _.GRectangleTool = GRectangleTool;
})(this);